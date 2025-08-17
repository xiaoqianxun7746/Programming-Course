import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Users, Clock, Play, Award, Target, Zap } from 'lucide-react';
import './Home.css';

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
  isNew?: boolean;
  isHot?: boolean;
}

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 轮播图数据
  const slides = [
    {
      id: 1,
      title: "开启孩子的编程之旅",
      subtitle: "专业少儿编程教育，培养未来科技人才",
      image: "hero-kids-coding",
      cta: "立即体验",
      link: "/courses"
    },
    {
      id: 2,
      title: "Scratch图形化编程",
      subtitle: "零基础入门，让孩子爱上编程",
      image: "scratch-programming",
      cta: "免费试听",
      link: "/course/1"
    },
    {
      id: 3,
      title: "Python人工智能课程",
      subtitle: "掌握AI技术，成为未来的创造者",
      image: "python-programming",
      cta: "了解详情",
      link: "/course/2"
    }
  ];

  // 新品推荐课程
  const newCourses: Course[] = [
    {
      id: 1,
      title: "Scratch创意编程入门",
      description: "通过拖拽积木的方式学习编程基础概念，培养逻辑思维能力",
      image: "scratch-programming",
      price: 299,
      originalPrice: 399,
      rating: 4.9,
      students: 1234,
      duration: "12课时",
      level: "入门",
      category: "图形化编程",
      isNew: true
    },
    {
      id: 2,
      title: "Python趣味编程",
      description: "从零开始学习Python，通过有趣的项目掌握编程技能",
      image: "python-programming",
      price: 499,
      originalPrice: 699,
      rating: 4.8,
      students: 856,
      duration: "20课时",
      level: "进阶",
      category: "Python编程",
      isNew: true
    },
    {
      id: 3,
      title: "机器人编程挑战",
      description: "结合硬件和软件，让孩子在实践中学习编程",
      image: "robot-programming",
      price: 799,
      originalPrice: 999,
      rating: 4.9,
      students: 567,
      duration: "16课时",
      level: "高级",
      category: "机器人编程",
      isNew: true
    }
  ];

  // 热销课程
  const hotCourses: Course[] = [
    {
      id: 4,
      title: "JavaScript游戏开发",
      description: "学习制作网页游戏，掌握前端开发技能",
      image: "javascript-game",
      price: 599,
      rating: 4.7,
      students: 2341,
      duration: "24课时",
      level: "进阶",
      category: "Web开发",
      isHot: true
    },
    {
      id: 5,
      title: "AI人工智能启蒙",
      description: "了解人工智能基础，体验机器学习的魅力",
      image: "ai-programming",
      price: 699,
      rating: 4.8,
      students: 1876,
      duration: "18课时",
      level: "进阶",
      category: "人工智能",
      isHot: true
    },
    {
      id: 6,
      title: "3D建模与设计",
      description: "学习3D建模软件，培养空间想象力和创造力",
      image: "3d-modeling",
      price: 549,
      rating: 4.6,
      students: 1432,
      duration: "15课时",
      level: "中级",
      category: "设计创作",
      isHot: true
    }
  ];

  // 轮播图自动播放
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="course-card">
      <div className="course-image">
        <div className={`course-placeholder ${course.image}`}>
          <Play size={40} />
        </div>
        {course.isNew && <span className="badge badge-new">新品</span>}
        {course.isHot && <span className="badge badge-hot">热销</span>}
      </div>
      <div className="course-content">
        <div className="course-meta">
          <span className="course-level">{course.level}</span>
          <span className="course-category">{course.category}</span>
        </div>
        <h3 className="course-title">{course.title}</h3>
        <p className="course-description">{course.description}</p>
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
          <span className="current-price">¥{course.price}</span>
          {course.originalPrice && (
            <span className="original-price">¥{course.originalPrice}</span>
          )}
        </div>
        <Link to={`/course/${course.id}`} className="btn btn-primary course-btn">
          立即学习
        </Link>
      </div>
    </div>
  );

  return (
    <div className="home">
      {/* 轮播图区域 */}
      <section className="hero-section">
        <div className="hero-slider">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
            >
              <div className={`hero-background ${slide.image}`}></div>
              <div className="container">
                <div className="hero-content">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                  <Link to={slide.link} className="btn btn-primary hero-cta">
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          ))}
          
          <button className="hero-nav hero-prev" onClick={prevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="hero-nav hero-next" onClick={nextSlide}>
            <ChevronRight size={24} />
          </button>
          
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 特色优势 */}
      <section className="features-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">
                <Target size={32} />
              </div>
              <h3>专业课程体系</h3>
              <p>科学的课程设计，循序渐进的学习路径</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Award size={32} />
              </div>
              <h3>资深师资团队</h3>
              <p>经验丰富的编程教师，一对一指导</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>趣味互动学习</h3>
              <p>游戏化教学方式，激发学习兴趣</p>
            </div>
          </div>
        </div>
      </section>

      {/* 新品推荐 */}
      <section className="new-courses-section">
        <div className="container">
          <div className="section-header">
            <h2>新品推荐</h2>
            <p>最新上线的精品课程，抢先体验</p>
            <Link to="/courses?filter=new" className="btn btn-outline">
              查看更多
            </Link>
          </div>
          <div className="courses-grid">
            {newCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* 热销课程 */}
      <section className="hot-courses-section">
        <div className="container">
          <div className="section-header">
            <h2>热销课程</h2>
            <p>最受欢迎的编程课程，口碑之选</p>
            <Link to="/courses?filter=hot" className="btn btn-outline">
              查看更多
            </Link>
          </div>
          <div className="courses-grid">
            {hotCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA区域 */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>开始您孩子的编程之旅</h2>
            <p>专业的少儿编程教育，让孩子在快乐中学习，在学习中成长</p>
            <div className="cta-actions">
              <Link to="/register" className="btn btn-primary">
                免费注册
              </Link>
              <Link to="/courses" className="btn btn-secondary">
                浏览课程
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;