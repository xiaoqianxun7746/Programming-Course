import React, { useState, useEffect } from 'react';
import { Star, Users, BookOpen, Award, Mail, Phone, MapPin } from 'lucide-react';
import './Teachers.css';

interface Teacher {
  id: number;
  name: string;
  title: string;
  avatar: string;
  specialties: string[];
  experience: string;
  education: string;
  courses: number;
  students: number;
  rating: number;
  description: string;
  achievements: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  isStarTeacher?: boolean;
}

const Teachers: React.FC = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredTeachers, setFilteredTeachers] = useState<Teacher[]>([]);

  // 模拟教师数据
  const mockTeachers: Teacher[] = [
    {
      id: 1,
      name: "张老师",
      title: "资深少儿编程讲师",
      avatar: "teacher-zhang",
      specialties: ["Scratch编程", "图形化编程", "编程思维"],
      experience: "5年教学经验",
      education: "计算机科学与技术硕士",
      courses: 8,
      students: 5000,
      rating: 4.9,
      description: "张老师拥有丰富的少儿编程教学经验，擅长用生动有趣的方式引导孩子学习编程。她的课程深受学生和家长喜爱，能够很好地培养孩子的逻辑思维能力和创造力。",
      achievements: [
        "新东方优秀教师奖",
        "少儿编程教育专家认证",
        "全国青少年编程大赛优秀指导教师",
        "教学创新奖"
      ],
      contact: {
        email: "zhang.teacher@example.com",
        phone: "138-0000-0001",
        location: "北京市海淀区"
      },
      isStarTeacher: true
    },
    {
      id: 2,
      name: "李老师",
      title: "Python编程专家",
      avatar: "teacher-li",
      specialties: ["Python编程", "数据分析", "人工智能"],
      experience: "7年教学经验",
      education: "软件工程博士",
      courses: 12,
      students: 8000,
      rating: 4.8,
      description: "李老师是Python编程领域的专家，具有深厚的技术功底和丰富的项目经验。他善于将复杂的编程概念用简单易懂的方式传授给学生，帮助学生快速掌握Python编程技能。",
      achievements: [
        "Python编程认证讲师",
        "人工智能教育先锋奖",
        "优秀教学成果奖",
        "学生最喜爱的老师"
      ],
      contact: {
        email: "li.teacher@example.com",
        phone: "138-0000-0002",
        location: "上海市浦东新区"
      },
      isStarTeacher: true
    },
    {
      id: 3,
      name: "王老师",
      title: "机器人编程导师",
      avatar: "teacher-wang",
      specialties: ["机器人编程", "硬件开发", "创客教育"],
      experience: "6年教学经验",
      education: "机械工程硕士",
      courses: 6,
      students: 3500,
      rating: 4.9,
      description: "王老师专注于机器人编程教育，拥有丰富的硬件开发经验。他的课程注重理论与实践相结合，让学生在动手实践中学习编程，培养工程思维和创新能力。",
      achievements: [
        "机器人教育专家认证",
        "创客教育优秀导师",
        "青少年科技创新指导奖",
        "教学质量优秀奖"
      ],
      contact: {
        email: "wang.teacher@example.com",
        phone: "138-0000-0003",
        location: "深圳市南山区"
      }
    },
    {
      id: 4,
      name: "陈老师",
      title: "Web开发工程师",
      avatar: "teacher-chen",
      specialties: ["JavaScript", "Web开发", "前端技术"],
      experience: "4年教学经验",
      education: "计算机科学学士",
      courses: 10,
      students: 4200,
      rating: 4.7,
      description: "陈老师是经验丰富的Web开发工程师，对前端技术有深入的理解。他的教学风格轻松幽默，能够让学生在愉快的氛围中学习Web开发技术。",
      achievements: [
        "前端开发认证讲师",
        "Web技术教学创新奖",
        "学生评教优秀奖",
        "技术分享达人"
      ],
      contact: {
        email: "chen.teacher@example.com",
        phone: "138-0000-0004",
        location: "杭州市西湖区"
      }
    },
    {
      id: 5,
      name: "刘老师",
      title: "人工智能研究员",
      avatar: "teacher-liu",
      specialties: ["人工智能", "机器学习", "深度学习"],
      experience: "8年教学经验",
      education: "人工智能博士",
      courses: 5,
      students: 2800,
      rating: 4.8,
      description: "刘老师是人工智能领域的资深研究员，具有深厚的理论基础和丰富的实践经验。他致力于将前沿的AI技术以通俗易懂的方式传授给学生。",
      achievements: [
        "AI教育专家认证",
        "机器学习课程设计奖",
        "科研教学双优奖",
        "国际AI教育贡献奖"
      ],
      contact: {
        email: "liu.teacher@example.com",
        phone: "138-0000-0005",
        location: "广州市天河区"
      },
      isStarTeacher: true
    },
    {
      id: 6,
      name: "赵老师",
      title: "3D设计专家",
      avatar: "teacher-zhao",
      specialties: ["3D建模", "设计创作", "数字艺术"],
      experience: "5年教学经验",
      education: "数字媒体艺术硕士",
      courses: 7,
      students: 3200,
      rating: 4.6,
      description: "赵老师是3D设计和数字艺术领域的专家，具有丰富的创作经验。她的课程注重培养学生的空间想象力和艺术创造力，让学生在学习技术的同时提升审美能力。",
      achievements: [
        "3D设计教育专家",
        "数字艺术创作奖",
        "创意教学优秀奖",
        "学生作品指导奖"
      ],
      contact: {
        email: "zhao.teacher@example.com",
        phone: "138-0000-0006",
        location: "成都市锦江区"
      }
    },
    {
      id: 7,
      name: "孙老师",
      title: "编程思维训练师",
      avatar: "teacher-sun",
      specialties: ["编程思维", "逻辑训练", "问题解决"],
      experience: "6年教学经验",
      education: "教育学硕士",
      courses: 4,
      students: 6500,
      rating: 4.5,
      description: "孙老师专注于编程思维的培养，具有深厚的教育学背景。她善于设计有趣的思维训练活动，帮助学生建立良好的逻辑思维基础。",
      achievements: [
        "思维训练专家认证",
        "教育创新实践奖",
        "逻辑思维课程设计奖",
        "家长满意度最高奖"
      ],
      contact: {
        email: "sun.teacher@example.com",
        phone: "138-0000-0007",
        location: "武汉市洪山区"
      }
    },
    {
      id: 8,
      name: "周老师",
      title: "移动开发工程师",
      avatar: "teacher-zhou",
      specialties: ["移动开发", "App设计", "用户体验"],
      experience: "5年教学经验",
      education: "软件工程硕士",
      courses: 6,
      students: 2100,
      rating: 4.7,
      description: "周老师是经验丰富的移动开发工程师，对App开发有深入的理解。他的课程注重实践操作，让学生能够独立开发出功能完整的移动应用。",
      achievements: [
        "移动开发认证讲师",
        "App开发教学奖",
        "学生项目指导奖",
        "技术创新教学奖"
      ],
      contact: {
        email: "zhou.teacher@example.com",
        phone: "138-0000-0008",
        location: "南京市江宁区"
      }
    }
  ];

  const categories = [
    { value: 'all', label: '全部老师' },
    { value: 'star', label: '明星讲师' },
    { value: '图形化编程', label: '图形化编程' },
    { value: 'Python编程', label: 'Python编程' },
    { value: '机器人编程', label: '机器人编程' },
    { value: 'Web开发', label: 'Web开发' },
    { value: '人工智能', label: '人工智能' },
    { value: '设计创作', label: '设计创作' }
  ];

  useEffect(() => {
    setTeachers(mockTeachers);
    setFilteredTeachers(mockTeachers);
  }, []);

  useEffect(() => {
    let filtered = teachers;
    
    if (selectedCategory === 'star') {
      filtered = teachers.filter(teacher => teacher.isStarTeacher);
    } else if (selectedCategory !== 'all') {
      filtered = teachers.filter(teacher => 
        teacher.specialties.some(specialty => specialty.includes(selectedCategory))
      );
    }
    
    setFilteredTeachers(filtered);
  }, [teachers, selectedCategory]);

  const TeacherCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => (
    <div className="teacher-card">
      <div className="teacher-header">
        <div className="teacher-avatar">
          <div className={`avatar-placeholder ${teacher.avatar}`}>
            {teacher.name.charAt(0)}
          </div>
          {teacher.isStarTeacher && (
            <div className="star-badge">
              <Star size={16} fill="currentColor" />
            </div>
          )}
        </div>
        <div className="teacher-basic-info">
          <h3 className="teacher-name">{teacher.name}</h3>
          <p className="teacher-title">{teacher.title}</p>
          <div className="teacher-stats">
            <div className="stat">
              <Star size={14} fill="currentColor" />
              <span>{teacher.rating}</span>
            </div>
            <div className="stat">
              <Users size={14} />
              <span>{teacher.students}</span>
            </div>
            <div className="stat">
              <BookOpen size={14} />
              <span>{teacher.courses}门课程</span>
            </div>
          </div>
        </div>
      </div>

      <div className="teacher-content">
        <div className="teacher-specialties">
          <h4>专业领域</h4>
          <div className="specialties-tags">
            {teacher.specialties.map((specialty, index) => (
              <span key={index} className="specialty-tag">{specialty}</span>
            ))}
          </div>
        </div>

        <div className="teacher-education">
          <div className="education-item">
            <strong>教学经验：</strong>
            <span>{teacher.experience}</span>
          </div>
          <div className="education-item">
            <strong>教育背景：</strong>
            <span>{teacher.education}</span>
          </div>
        </div>

        <div className="teacher-description">
          <p>{teacher.description}</p>
        </div>

        <div className="teacher-achievements">
          <h4>主要成就</h4>
          <ul>
            {teacher.achievements.slice(0, 3).map((achievement, index) => (
              <li key={index}>
                <Award size={14} />
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="teacher-contact">
          <div className="contact-item">
            <Mail size={14} />
            <span>{teacher.contact.email}</span>
          </div>
          <div className="contact-item">
            <Phone size={14} />
            <span>{teacher.contact.phone}</span>
          </div>
          <div className="contact-item">
            <MapPin size={14} />
            <span>{teacher.contact.location}</span>
          </div>
        </div>

        <div className="teacher-actions">
          <button className="btn btn-primary">查看课程</button>
          <button className="btn btn-outline">联系老师</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="teachers-page">
      <div className="container">
        {/* 页面头部 */}
        <div className="page-header">
          <h1>师资团队</h1>
          <p>汇聚行业精英，为孩子提供最优质的编程教育</p>
        </div>

        {/* 统计信息 */}
        <div className="stats-section">
          <div className="stat-card">
            <div className="stat-number">{teachers.length}</div>
            <div className="stat-label">专业讲师</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{teachers.reduce((sum, teacher) => sum + teacher.students, 0).toLocaleString()}</div>
            <div className="stat-label">累计学员</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{teachers.reduce((sum, teacher) => sum + teacher.courses, 0)}</div>
            <div className="stat-label">精品课程</div>
          </div>
          <div className="stat-card">
            <div className="stat-number">{(teachers.reduce((sum, teacher) => sum + teacher.rating, 0) / teachers.length).toFixed(1)}</div>
            <div className="stat-label">平均评分</div>
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.value}
              className={`category-btn ${selectedCategory === category.value ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.value)}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* 结果统计 */}
        <div className="results-info">
          <span>找到 {filteredTeachers.length} 位老师</span>
        </div>

        {/* 教师列表 */}
        <div className="teachers-grid">
          {filteredTeachers.length > 0 ? (
            filteredTeachers.map(teacher => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))
          ) : (
            <div className="empty-state">
              <h3>暂无匹配的老师</h3>
              <p>请尝试选择其他分类</p>
              <button 
                className="btn btn-primary"
                onClick={() => setSelectedCategory('all')}
              >
                查看全部老师
              </button>
            </div>
          )}
        </div>

        {/* 招聘信息 */}
        <div className="recruitment-section">
          <div className="recruitment-card">
            <h2>加入我们的团队</h2>
            <p>我们正在寻找优秀的编程教育人才，如果你热爱教育事业，具备专业技能，欢迎加入我们！</p>
            <div className="recruitment-benefits">
              <div className="benefit-item">
                <Award size={20} />
                <span>优厚薪资待遇</span>
              </div>
              <div className="benefit-item">
                <Users size={20} />
                <span>专业团队支持</span>
              </div>
              <div className="benefit-item">
                <BookOpen size={20} />
                <span>持续培训发展</span>
              </div>
            </div>
            <button className="btn btn-primary btn-large">立即申请</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;