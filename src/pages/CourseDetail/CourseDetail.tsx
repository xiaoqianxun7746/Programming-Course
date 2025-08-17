import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Play, Clock, Users, Star, Award, CheckCircle, 
  BookOpen, Video, Download, MessageCircle, 
  Calendar, Target, Zap, Shield 
} from 'lucide-react';
import './CourseDetail.css';

interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  students: number;
  rating: number;
  level: string;
  ageRange: string;
  instructor: {
    name: string;
    title: string;
    experience: string;
    avatar: string;
  };
  features: string[];
  curriculum: {
    title: string;
    lessons: {
      title: string;
      duration: string;
      type: 'video' | 'practice' | 'quiz';
    }[];
  }[];
  requirements: string[];
  outcomes: string[];
  tools: string[];
}

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [activeTab, setActiveTab] = useState('overview');

  // 模拟课程数据
  const courseData: { [key: string]: Course } = {
    'scratch': {
      id: 'scratch',
      title: 'Scratch图形化编程',
      subtitle: '让孩子爱上编程的第一步',
      description: 'Scratch是专为儿童设计的图形化编程语言，通过拖拽积木块的方式让孩子轻松学习编程概念。本课程将带领孩子从零开始，逐步掌握编程思维，创作出属于自己的动画、游戏和互动故事。',
      price: 299,
      originalPrice: 399,
      duration: '3个月',
      students: 1250,
      rating: 4.9,
      level: '入门',
      ageRange: '6-10岁',
      instructor: {
        name: '张老师',
        title: '高级编程讲师',
        experience: '8年少儿编程教学经验',
        avatar: '👩‍🏫'
      },
      features: [
        '图形化编程，易于理解',
        '项目式学习，寓教于乐',
        '一对一辅导答疑',
        '作品展示平台',
        '家长学习报告'
      ],
      curriculum: [
        {
          title: '第一章：Scratch基础',
          lessons: [
            { title: 'Scratch界面介绍', duration: '15分钟', type: 'video' },
            { title: '第一个动画制作', duration: '20分钟', type: 'practice' },
            { title: '基础概念测试', duration: '10分钟', type: 'quiz' }
          ]
        },
        {
          title: '第二章：角色与舞台',
          lessons: [
            { title: '角色设计与导入', duration: '18分钟', type: 'video' },
            { title: '舞台背景制作', duration: '22分钟', type: 'practice' },
            { title: '角色控制练习', duration: '25分钟', type: 'practice' }
          ]
        },
        {
          title: '第三章：动作与事件',
          lessons: [
            { title: '移动与旋转', duration: '20分钟', type: 'video' },
            { title: '事件响应机制', duration: '25分钟', type: 'video' },
            { title: '互动游戏制作', duration: '30分钟', type: 'practice' }
          ]
        }
      ],
      requirements: [
        '具备基本的电脑操作能力',
        '能够使用鼠标进行拖拽操作',
        '有一定的中文阅读能力'
      ],
      outcomes: [
        '掌握Scratch编程基础概念',
        '能够独立制作简单动画',
        '理解程序的逻辑结构',
        '培养创造性思维能力',
        '完成3-5个编程作品'
      ],
      tools: ['Scratch 3.0', '网页浏览器', '电脑或平板']
    },
    'python': {
      id: 'python',
      title: 'Python编程入门',
      subtitle: '从零开始学习最受欢迎的编程语言',
      description: 'Python是当今最流行的编程语言之一，语法简洁易懂，非常适合编程初学者。本课程将从Python基础语法开始，逐步深入到面向对象编程、数据处理等高级主题，让学生掌握真正的编程技能。',
      price: 499,
      originalPrice: 699,
      duration: '6个月',
      students: 890,
      rating: 4.8,
      level: '初级',
      ageRange: '10-16岁',
      instructor: {
        name: '李老师',
        title: 'Python专家讲师',
        experience: '10年Python开发与教学经验',
        avatar: '👨‍💻'
      },
      features: [
        '真实代码编程体验',
        '项目驱动学习方式',
        '在线编程环境',
        '代码审查与反馈',
        '编程思维训练'
      ],
      curriculum: [
        {
          title: '第一章：Python基础',
          lessons: [
            { title: 'Python环境搭建', duration: '20分钟', type: 'video' },
            { title: '变量与数据类型', duration: '25分钟', type: 'video' },
            { title: '基础语法练习', duration: '30分钟', type: 'practice' }
          ]
        },
        {
          title: '第二章：控制结构',
          lessons: [
            { title: '条件判断语句', duration: '22分钟', type: 'video' },
            { title: '循环结构详解', duration: '28分钟', type: 'video' },
            { title: '综合练习项目', duration: '40分钟', type: 'practice' }
          ]
        }
      ],
      requirements: [
        '具备基本的数学概念',
        '熟练使用键盘输入',
        '有一定的英语基础',
        '逻辑思维能力'
      ],
      outcomes: [
        '掌握Python基础语法',
        '理解编程核心概念',
        '能够编写简单程序',
        '具备解决问题的能力',
        '完成多个实战项目'
      ],
      tools: ['Python 3.x', 'VS Code', 'Jupyter Notebook']
    }
  };

  const course = courseData[courseId || 'scratch'];

  if (!course) {
    return (
      <div className="course-not-found">
        <h2>课程未找到</h2>
        <Link to="/courses">返回课程列表</Link>
      </div>
    );
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video size={16} />;
      case 'practice':
        return <BookOpen size={16} />;
      case 'quiz':
        return <CheckCircle size={16} />;
      default:
        return <BookOpen size={16} />;
    }
  };

  return (
    <div className="course-detail-page">
      {/* 课程头部 */}
      <section className="course-hero">
        <div className="container">
          <div className="course-hero-content">
            <div className="course-info">
              <div className="course-breadcrumb">
                <Link to="/">首页</Link>
                <span>/</span>
                <Link to="/courses">课程</Link>
                <span>/</span>
                <span>{course.title}</span>
              </div>
              
              <h1 className="course-title">{course.title}</h1>
              <p className="course-subtitle">{course.subtitle}</p>
              
              <div className="course-meta">
                <div className="meta-item">
                  <div className="rating">
                    {renderStars(course.rating)}
                    <span className="rating-number">{course.rating}</span>
                  </div>
                </div>
                <div className="meta-item">
                  <Users size={16} />
                  <span>{course.students}名学员</span>
                </div>
                <div className="meta-item">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>
                <div className="meta-item">
                  <Award size={16} />
                  <span>{course.level}</span>
                </div>
              </div>
              
              <div className="course-features">
                {course.features.map((feature, index) => (
                  <div key={index} className="feature-item">
                    <CheckCircle size={16} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="course-card">
              <div className="course-preview">
                <div className="preview-placeholder">
                  <Play size={48} />
                  <p>课程预览</p>
                </div>
              </div>
              
              <div className="course-pricing">
                <div className="price-info">
                  <span className="current-price">¥{course.price}</span>
                  <span className="original-price">¥{course.originalPrice}</span>
                </div>
                <button className="enroll-btn">
                  <Zap size={20} />
                  立即报名
                </button>
                <button className="trial-btn">
                  <Play size={20} />
                  免费试听
                </button>
              </div>
              
              <div className="course-includes">
                <h4>课程包含</h4>
                <div className="includes-list">
                  <div className="include-item">
                    <Video size={16} />
                    <span>高清视频课程</span>
                  </div>
                  <div className="include-item">
                    <Download size={16} />
                    <span>课程资料下载</span>
                  </div>
                  <div className="include-item">
                    <MessageCircle size={16} />
                    <span>在线答疑支持</span>
                  </div>
                  <div className="include-item">
                    <Award size={16} />
                    <span>结业证书</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 课程详情标签页 */}
      <section className="course-details">
        <div className="container">
          <div className="details-tabs">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              课程概述
            </button>
            <button
              className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              课程大纲
            </button>
            <button
              className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              讲师介绍
            </button>
            <button
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              学员评价
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="overview-grid">
                  <div className="overview-main">
                    <h3>课程介绍</h3>
                    <p className="course-description">{course.description}</p>
                    
                    <h3>学习目标</h3>
                    <div className="outcomes-list">
                      {course.outcomes.map((outcome, index) => (
                        <div key={index} className="outcome-item">
                          <Target size={16} />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>
                    
                    <h3>适合人群</h3>
                    <div className="age-range">
                      <Users size={20} />
                      <span>适合年龄：{course.ageRange}</span>
                    </div>
                  </div>
                  
                  <div className="overview-sidebar">
                    <div className="requirements-card">
                      <h4>学习要求</h4>
                      <div className="requirements-list">
                        {course.requirements.map((req, index) => (
                          <div key={index} className="requirement-item">
                            <Shield size={14} />
                            <span>{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="tools-card">
                      <h4>所需工具</h4>
                      <div className="tools-list">
                        {course.tools.map((tool, index) => (
                          <div key={index} className="tool-item">
                            <Download size={14} />
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <h3>课程大纲</h3>
                <div className="curriculum-list">
                  {course.curriculum.map((chapter, chapterIndex) => (
                    <div key={chapterIndex} className="chapter-item">
                      <h4 className="chapter-title">{chapter.title}</h4>
                      <div className="lessons-list">
                        {chapter.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="lesson-item">
                            <div className="lesson-info">
                              {getLessonIcon(lesson.type)}
                              <span className="lesson-title">{lesson.title}</span>
                            </div>
                            <span className="lesson-duration">{lesson.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === 'instructor' && (
              <div className="instructor-content">
                <div className="instructor-card">
                  <div className="instructor-avatar">
                    <span>{course.instructor.avatar}</span>
                  </div>
                  <div className="instructor-info">
                    <h3>{course.instructor.name}</h3>
                    <p className="instructor-title">{course.instructor.title}</p>
                    <p className="instructor-experience">{course.instructor.experience}</p>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <div className="rating-score">{course.rating}</div>
                    <div className="rating-stars">
                      {renderStars(course.rating)}
                    </div>
                    <div className="rating-count">基于{course.students}名学员评价</div>
                  </div>
                </div>
                
                <div className="reviews-list">
                  <div className="review-item">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">👦</div>
                      <div className="reviewer-details">
                        <h5>小明同学</h5>
                        <div className="review-rating">
                          {renderStars(5)}
                        </div>
                      </div>
                    </div>
                    <p className="review-text">
                      老师讲得很好，课程内容很有趣，我已经能做出自己的小游戏了！
                    </p>
                  </div>
                  
                  <div className="review-item">
                    <div className="reviewer-info">
                      <div className="reviewer-avatar">👧</div>
                      <div className="reviewer-details">
                        <h5>小红同学</h5>
                        <div className="review-rating">
                          {renderStars(5)}
                        </div>
                      </div>
                    </div>
                    <p className="review-text">
                      从完全不懂编程到现在能独立完成项目，感谢老师的耐心指导！
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;