import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Star, Users, Clock, Play, ChevronDown } from 'lucide-react';
import './Course.css';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: string;
  category: string;
  instructor: string;
  isNew?: boolean;
  isHot?: boolean;
  isFree?: boolean;
}

const CourseList: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Course[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [showFilters, setShowFilters] = useState(false);

  // 模拟课程数据
  const mockCourses: Course[] = [
    {
      id: 1,
      title: "Scratch创意编程入门",
      description: "通过拖拽积木的方式学习编程基础概念，培养逻辑思维能力。适合6-12岁的孩子，零基础也能轻松上手。",
      image: "course-scratch",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      students: 1234,
      duration: "12课时",
      level: "入门",
      category: "图形化编程",
      instructor: "张老师",
      isNew: true
    },
    {
      id: 2,
      title: "Python趣味编程",
      description: "从零开始学习Python，通过有趣的项目掌握编程技能。包含游戏制作、数据分析等实战项目。",
      image: "course-python",
      price: 499,
      originalPrice: 699,
      rating: 4.8,
      students: 856,
      duration: "20课时",
      level: "进阶",
      category: "Python编程",
      instructor: "李老师",
      isNew: true
    },
    {
      id: 3,
      title: "机器人编程挑战",
      description: "结合硬件和软件，让孩子在实践中学习编程。通过搭建和编程机器人，培养动手能力。",
      image: "course-robot",
      price: 799,
      originalPrice: 999,
      rating: 4.9,
      students: 567,
      duration: "16课时",
      level: "高级",
      category: "机器人编程",
      instructor: "王老师"
    },
    {
      id: 4,
      title: "JavaScript游戏开发",
      description: "学习制作网页游戏，掌握前端开发技能。从简单的小游戏到复杂的交互应用。",
      image: "course-js",
      price: 599,
      rating: 4.7,
      students: 2341,
      duration: "24课时",
      level: "进阶",
      category: "Web开发",
      instructor: "陈老师",
      isHot: true
    },
    {
      id: 5,
      title: "AI人工智能启蒙",
      description: "了解人工智能基础，体验机器学习的魅力。通过简单的AI项目激发孩子对科技的兴趣。",
      image: "course-ai",
      price: 699,
      rating: 4.8,
      students: 1876,
      duration: "18课时",
      level: "进阶",
      category: "人工智能",
      instructor: "刘老师",
      isHot: true
    },
    {
      id: 6,
      title: "3D建模与设计",
      description: "学习3D建模软件，培养空间想象力和创造力。制作自己的3D作品和动画。",
      image: "course-3d",
      price: 549,
      rating: 4.6,
      students: 1432,
      duration: "15课时",
      level: "中级",
      category: "设计创作",
      instructor: "赵老师"
    },
    {
      id: 7,
      title: "编程思维训练营",
      description: "专注培养编程思维和逻辑能力，不依赖特定编程语言，适合所有年龄段的孩子。",
      image: "course-thinking",
      price: 0,
      rating: 4.5,
      students: 3456,
      duration: "8课时",
      level: "入门",
      category: "编程思维",
      instructor: "孙老师",
      isFree: true
    },
    {
      id: 8,
      title: "App开发入门",
      description: "学习移动应用开发，制作属于自己的手机App。从界面设计到功能实现的完整流程。",
      image: "course-app",
      price: 899,
      rating: 4.7,
      students: 678,
      duration: "28课时",
      level: "高级",
      category: "移动开发",
      instructor: "周老师"
    }
  ];

  const categories = [
    { value: 'all', label: '全部分类' },
    { value: '图形化编程', label: '图形化编程' },
    { value: 'Python编程', label: 'Python编程' },
    { value: '机器人编程', label: '机器人编程' },
    { value: 'Web开发', label: 'Web开发' },
    { value: '人工智能', label: '人工智能' },
    { value: '设计创作', label: '设计创作' },
    { value: '编程思维', label: '编程思维' },
    { value: '移动开发', label: '移动开发' }
  ];

  const levels = [
    { value: 'all', label: '全部难度' },
    { value: '入门', label: '入门' },
    { value: '中级', label: '中级' },
    { value: '进阶', label: '进阶' },
    { value: '高级', label: '高级' }
  ];

  const sortOptions = [
    { value: 'popular', label: '最受欢迎' },
    { value: 'newest', label: '最新发布' },
    { value: 'price-low', label: '价格从低到高' },
    { value: 'price-high', label: '价格从高到低' },
    { value: 'rating', label: '评分最高' }
  ];

  useEffect(() => {
    setCourses(mockCourses);
    setFilteredCourses(mockCourses);
  }, []);

  useEffect(() => {
    let filtered = courses.filter(course => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
      
      return matchesSearch && matchesCategory && matchesLevel;
    });

    // 排序
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'popular':
        default:
          return b.students - a.students;
      }
    });

    setFilteredCourses(filtered);
  }, [courses, searchTerm, selectedCategory, selectedLevel, sortBy]);

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="course-card">
      <div className="course-image">
        <div className={`course-placeholder ${course.image}`}>
          <Play size={40} />
        </div>
        {course.isNew && <span className="badge badge-new">新品</span>}
        {course.isHot && <span className="badge badge-hot">热销</span>}
        {course.isFree && <span className="badge badge-free">免费</span>}
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span className="course-level">{course.level}</span>
          <span className="course-category">{course.category}</span>
        </div>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
        <div className="course-instructor">
          <span>讲师：{course.instructor}</span>
        </div>
        <div className="course-stats">
          <div className="stat">
            <Star size={16} fill="currentColor" />
            <span>{course.rating}</span>
          </div>
          <div className="stat">
            <Users size={16} />
            <span>{course.students}</span>
          </div>
          <div className="stat">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
        </div>
        <div className="course-price">
          {course.isFree ? (
            <span className="free-price">免费</span>
          ) : (
            <>
              <span className="current-price">¥{course.price}</span>
              {course.originalPrice && (
                <span className="original-price">¥{course.originalPrice}</span>
              )}
            </>
          )}
        </div>
        <Link to={`/courses/${course.id}`} className="btn btn-primary course-btn">
          {course.isFree ? '免费学习' : '立即学习'}
        </Link>
      </div>
    </div>
  );

  return (
    <div className="course-list-page">
      <div className="container">
        {/* 页面头部 */}
        <div className="page-header">
          <h1>课程中心</h1>
          <p>精选优质编程课程，助力孩子成长</p>
        </div>

        {/* 搜索和筛选 */}
        <div className="search-filter-section">
          <div className="search-bar">
            <Search className="search-icon" size={20} />
            <input
              type="text"
              placeholder="搜索课程名称或关键词..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button 
            className="filter-toggle"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            筛选
            <ChevronDown size={16} className={showFilters ? 'rotate' : ''} />
          </button>
        </div>

        {/* 筛选器 */}
        <div className={`filters ${showFilters ? 'show' : ''}`}>
          <div className="filter-group">
            <label>课程分类</label>
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>难度等级</label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              {levels.map(level => (
                <option key={level.value} value={level.value}>{level.label}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label>排序方式</label>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
            >
              {sortOptions.map(option => (
                <option key={option.value} value={option.value}>{option.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* 结果统计 */}
        <div className="results-info">
          <span>找到 {filteredCourses.length} 门课程</span>
        </div>

        {/* 课程列表 */}
        <div className="courses-grid">
          {filteredCourses.length > 0 ? (
            filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <div className="empty-state">
              <h3>暂无匹配的课程</h3>
              <p>请尝试调整搜索条件或筛选器</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                }}
              >
                重置筛选
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseList;