import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Users, Clock, Play, Download, Share2, Heart, ChevronRight, CheckCircle, PlayCircle, Lock } from 'lucide-react';
import './Course.css';

interface Course {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  students: number;
  duration: string;
  level: string;
  category: string;
  instructor: {
    name: string;
    avatar: string;
    title: string;
    experience: string;
    courses: number;
    students: number;
  };
  features: string[];
  requirements: string[];
  objectives: string[];
  chapters: {
    id: number;
    title: string;
    duration: string;
    lessons: {
      id: number;
      title: string;
      duration: string;
      isFree?: boolean;
    }[];
  }[];
  reviews: {
    id: number;
    user: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
  }[];
  isNew?: boolean;
  isHot?: boolean;
  isFree?: boolean;
}

const CourseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Course | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedChapter, setExpandedChapter] = useState<number | null>(null);
  const [isEnrolled, setIsEnrolled] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);

  // 模拟课程详情数据
  const mockCourseDetail: Course = {
    id: 1,
    title: "Scratch创意编程入门",
    description: "通过拖拽积木的方式学习编程基础概念，培养逻辑思维能力。适合6-12岁的孩子，零基础也能轻松上手。",
    fullDescription: "本课程专为6-12岁的孩子设计，通过Scratch图形化编程语言，让孩子在游戏中学习编程基础概念。课程内容循序渐进，从简单的动画制作到复杂的游戏开发，全面培养孩子的逻辑思维能力、创造力和问题解决能力。\n\n我们的教学方法注重实践和互动，每节课都有有趣的项目让孩子动手实践。通过制作动画、游戏和互动故事，孩子不仅能学到编程知识，还能培养艺术审美和叙事能力。",
    image: "course-scratch",
    price: 299,
    originalPrice: 399,
    rating: 4.9,
    students: 1234,
    duration: "12课时",
    level: "入门",
    category: "图形化编程",
    instructor: {
      name: "张老师",
      avatar: "teacher-zhang",
      title: "资深少儿编程讲师",
      experience: "5年教学经验",
      courses: 8,
      students: 5000
    },
    features: [
      "零基础入门，适合6-12岁儿童",
      "图形化编程，拖拽即可完成",
      "项目式学习，边做边学",
      "一对一答疑，及时解决问题",
      "作品展示平台，分享创作成果",
      "课后练习，巩固学习效果"
    ],
    requirements: [
      "具备基本的电脑操作能力",
      "能够使用鼠标进行拖拽操作",
      "有一定的中文阅读能力",
      "对编程和创作有兴趣"
    ],
    objectives: [
      "掌握Scratch编程环境的使用",
      "理解编程的基本概念（循环、条件、变量等）",
      "能够独立制作简单的动画和游戏",
      "培养逻辑思维和问题解决能力",
      "激发对编程和科技的兴趣",
      "提升创造力和想象力"
    ],
    chapters: [
      {
        id: 1,
        title: "第一章：Scratch入门",
        duration: "3课时",
        lessons: [
          { id: 1, title: "认识Scratch编程环境", duration: "30分钟", isFree: true },
          { id: 2, title: "第一个动画项目", duration: "45分钟", isFree: true },
          { id: 3, title: "角色和背景设置", duration: "40分钟" }
        ]
      },
      {
        id: 2,
        title: "第二章：基础编程概念",
        duration: "4课时",
        lessons: [
          { id: 4, title: "运动和坐标系统", duration: "35分钟" },
          { id: 5, title: "循环的使用", duration: "40分钟" },
          { id: 6, title: "条件判断", duration: "45分钟" },
          { id: 7, title: "变量和数据", duration: "50分钟" }
        ]
      },
      {
        id: 3,
        title: "第三章：交互和游戏制作",
        duration: "3课时",
        lessons: [
          { id: 8, title: "键盘和鼠标交互", duration: "40分钟" },
          { id: 9, title: "制作简单游戏", duration: "60分钟" },
          { id: 10, title: "音效和音乐", duration: "35分钟" }
        ]
      },
      {
        id: 4,
        title: "第四章：项目实战",
        duration: "2课时",
        lessons: [
          { id: 11, title: "综合项目制作", duration: "90分钟" },
          { id: 12, title: "作品展示和分享", duration: "30分钟" }
        ]
      }
    ],
    reviews: [
      {
        id: 1,
        user: "小明妈妈",
        avatar: "user-1",
        rating: 5,
        comment: "孩子非常喜欢这门课程，从完全不懂编程到能够制作简单的游戏，进步很大！张老师讲解得很清楚，孩子容易理解。",
        date: "2024-01-15"
      },
      {
        id: 2,
        user: "小红爸爸",
        avatar: "user-2",
        rating: 5,
        comment: "课程设计很合理，循序渐进。孩子学完后对编程产生了浓厚的兴趣，已经开始自己创作作品了。",
        date: "2024-01-10"
      },
      {
        id: 3,
        user: "小李同学",
        avatar: "user-3",
        rating: 4,
        comment: "很有趣的课程，学会了制作动画和小游戏。希望能有更多高级的内容。",
        date: "2024-01-08"
      }
    ],
    isNew: true
  };

  useEffect(() => {
    // 模拟获取课程详情
    setCourse(mockCourseDetail);
  }, [id]);

  const handleEnroll = () => {
    setIsEnrolled(true);
    alert('报名成功！请查看学习进度。');
  };

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  const toggleChapter = (chapterId: number) => {
    setExpandedChapter(expandedChapter === chapterId ? null : chapterId);
  };

  if (!course) {
    return (
      <div className="course-detail-page">
        <div className="container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>加载中...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      <div className="container">
        {/* 面包屑导航 */}
        <nav className="breadcrumb">
          <Link to="/">首页</Link>
          <ChevronRight size={16} />
          <Link to="/courses">课程中心</Link>
          <ChevronRight size={16} />
          <span>{course.title}</span>
        </nav>

        {/* 课程头部信息 */}
        <div className="course-header">
          <div className="course-info">
            <div className="course-badges">
              {course.isNew && <span className="badge badge-new">新品</span>}
              {course.isHot && <span className="badge badge-hot">热销</span>}
              {course.isFree && <span className="badge badge-free">免费</span>}
              <span className="badge badge-level">{course.level}</span>
            </div>
            <h1 className="course-title">{course.title}</h1>
            <p className="course-description">{course.description}</p>
            
            <div className="course-meta">
              <div className="meta-item">
                <Star size={16} fill="currentColor" />
                <span>{course.rating} ({course.students}人评价)</span>
              </div>
              <div className="meta-item">
                <Users size={16} />
                <span>{course.students}人学习</span>
              </div>
              <div className="meta-item">
                <Clock size={16} />
                <span>{course.duration}</span>
              </div>
            </div>

            <div className="instructor-info">
              <div className="instructor-avatar">
                <div className={`avatar-placeholder ${course.instructor.avatar}`}></div>
              </div>
              <div className="instructor-details">
                <h4>{course.instructor.name}</h4>
                <p>{course.instructor.title}</p>
                <span>{course.instructor.experience} · {course.instructor.courses}门课程 · {course.instructor.students}名学员</span>
              </div>
            </div>
          </div>

          <div className="course-sidebar">
            <div className="course-preview">
              <div className={`preview-image ${course.image}`}>
                <Play size={60} />
              </div>
              <button className="preview-btn">
                <PlayCircle size={20} />
                预览课程
              </button>
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

            <div className="course-actions">
              {isEnrolled ? (
                <Link to={`/learn/${course.id}`} className="btn btn-primary btn-large">
                  继续学习
                </Link>
              ) : (
                <button className="btn btn-primary btn-large" onClick={handleEnroll}>
                  {course.isFree ? '免费学习' : '立即报名'}
                </button>
              )}
              
              <div className="secondary-actions">
                <button 
                  className={`btn btn-outline ${isFavorited ? 'favorited' : ''}`}
                  onClick={handleFavorite}
                >
                  <Heart size={16} fill={isFavorited ? 'currentColor' : 'none'} />
                  {isFavorited ? '已收藏' : '收藏'}
                </button>
                <button className="btn btn-outline">
                  <Share2 size={16} />
                  分享
                </button>
              </div>
            </div>

            <div className="course-features">
              <h4>课程特色</h4>
              <ul>
                {course.features.map((feature, index) => (
                  <li key={index}>
                    <CheckCircle size={16} />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 课程详情标签页 */}
        <div className="course-tabs">
          <div className="tab-nav">
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
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              学员评价
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <section className="course-description">
                  <h3>课程介绍</h3>
                  <div className="description-text">
                    {course.fullDescription.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </section>

                <section className="course-objectives">
                  <h3>学习目标</h3>
                  <ul className="objectives-list">
                    {course.objectives.map((objective, index) => (
                      <li key={index}>
                        <CheckCircle size={16} />
                        {objective}
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="course-requirements">
                  <h3>学习要求</h3>
                  <ul className="requirements-list">
                    {course.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </section>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <div className="curriculum-header">
                  <h3>课程大纲</h3>
                  <p>共{course.chapters.length}章节，{course.chapters.reduce((total, chapter) => total + chapter.lessons.length, 0)}个课时</p>
                </div>
                
                <div className="chapters-list">
                  {course.chapters.map((chapter) => (
                    <div key={chapter.id} className="chapter-item">
                      <div 
                        className="chapter-header"
                        onClick={() => toggleChapter(chapter.id)}
                      >
                        <h4>{chapter.title}</h4>
                        <div className="chapter-meta">
                          <span>{chapter.duration}</span>
                          <ChevronRight 
                            size={16} 
                            className={expandedChapter === chapter.id ? 'rotate' : ''} 
                          />
                        </div>
                      </div>
                      
                      {expandedChapter === chapter.id && (
                        <div className="lessons-list">
                          {chapter.lessons.map((lesson) => (
                            <div key={lesson.id} className="lesson-item">
                              <div className="lesson-icon">
                                {lesson.isFree ? (
                                  <PlayCircle size={16} className="free-lesson" />
                                ) : (
                                  <Lock size={16} className="locked-lesson" />
                                )}
                              </div>
                              <div className="lesson-info">
                                <span className="lesson-title">{lesson.title}</span>
                                <span className="lesson-duration">{lesson.duration}</span>
                              </div>
                              {lesson.isFree && (
                                <span className="free-label">免费</span>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <div className="reviews-header">
                  <h3>学员评价</h3>
                  <div className="rating-summary">
                    <div className="overall-rating">
                      <span className="rating-score">{course.rating}</span>
                      <div className="rating-stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            fill={star <= Math.floor(course.rating) ? 'currentColor' : 'none'} 
                          />
                        ))}
                      </div>
                      <span className="rating-count">({course.students}人评价)</span>
                    </div>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {course.reviews.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className={`reviewer-avatar ${review.avatar}`}></div>
                          <div className="reviewer-details">
                            <span className="reviewer-name">{review.user}</span>
                            <div className="review-rating">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star 
                                  key={star} 
                                  size={14} 
                                  fill={star <= review.rating ? 'currentColor' : 'none'} 
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="review-date">{review.date}</span>
                      </div>
                      <p className="review-comment">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;