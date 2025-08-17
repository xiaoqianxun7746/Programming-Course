import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Target, Users, Heart, Star, BookOpen, Zap, Shield } from 'lucide-react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-page">
      {/* 页面头部 */}
      <section className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">关于我们</h1>
            <p className="hero-subtitle">
              专业的少儿编程教育平台，致力于培养孩子的逻辑思维和创新能力
            </p>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">10000+</div>
                <div className="stat-label">学员</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">专业讲师</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">精品课程</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">满意度</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的使命 */}
      <section className="mission-section">
        <div className="container">
          <div className="section-header">
            <h2>我们的使命</h2>
            <p>让每个孩子都能在编程的世界里发现无限可能</p>
          </div>
          <div className="mission-grid">
            <div className="mission-item">
              <div className="mission-icon">
                <Target size={48} />
              </div>
              <h3>培养逻辑思维</h3>
              <p>通过编程学习，培养孩子的逻辑思维能力和问题解决能力，为未来的学习和工作打下坚实基础。</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">
                <Zap size={48} />
              </div>
              <h3>激发创新精神</h3>
              <p>鼓励孩子发挥想象力和创造力，通过编程实现自己的创意想法，培养创新思维。</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">
                <Heart size={48} />
              </div>
              <h3>快乐学习体验</h3>
              <p>采用游戏化教学方式，让孩子在快乐中学习编程，享受学习的乐趣。</p>
            </div>
            <div className="mission-item">
              <div className="mission-icon">
                <Shield size={48} />
              </div>
              <h3>安全学习环境</h3>
              <p>提供安全、健康的在线学习环境，保护孩子的隐私和安全。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 我们的优势 */}
      <section className="advantages-section">
        <div className="container">
          <div className="section-header">
            <h2>我们的优势</h2>
            <p>专业、有趣、有效的少儿编程教育</p>
          </div>
          <div className="advantages-content">
            <div className="advantages-list">
              <div className="advantage-item">
                <div className="advantage-icon">
                  <Users size={32} />
                </div>
                <div className="advantage-content">
                  <h4>专业师资团队</h4>
                  <p>拥有丰富教学经验的专业讲师，深度了解儿童心理和学习特点</p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <BookOpen size={32} />
                </div>
                <div className="advantage-content">
                  <h4>科学课程体系</h4>
                  <p>循序渐进的课程设计，从图形化编程到代码编程的完整学习路径</p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <Award size={32} />
                </div>
                <div className="advantage-content">
                  <h4>个性化教学</h4>
                  <p>根据每个孩子的特点制定个性化学习方案，因材施教</p>
                </div>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">
                  <Star size={32} />
                </div>
                <div className="advantage-content">
                  <h4>项目式学习</h4>
                  <p>通过实际项目练习，让孩子在实践中掌握编程技能</p>
                </div>
              </div>
            </div>
            <div className="advantages-image">
              <div className="image-placeholder">
                <BookOpen size={120} />
                <p>专业教学环境</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="timeline-section">
        <div className="container">
          <div className="section-header">
            <h2>发展历程</h2>
            <p>我们的成长足迹</p>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2020</div>
              <div className="timeline-content">
                <h4>平台创立</h4>
                <p>少儿编程教育平台正式成立，开始为孩子们提供专业的编程教育服务</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2021</div>
              <div className="timeline-content">
                <h4>课程体系完善</h4>
                <p>建立完整的课程体系，涵盖Scratch、Python、JavaScript等多种编程语言</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2022</div>
              <div className="timeline-content">
                <h4>师资团队扩大</h4>
                <p>引进更多专业讲师，建立强大的师资团队，提升教学质量</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023</div>
              <div className="timeline-content">
                <h4>技术创新</h4>
                <p>引入AI辅助教学，个性化学习推荐，提升学习效果</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2024</div>
              <div className="timeline-content">
                <h4>持续发展</h4>
                <p>服务学员超过10000名，成为行业领先的少儿编程教育平台</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 行动号召 */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>开启孩子的编程之旅</h2>
            <p>让我们一起为孩子的未来投资，培养21世纪的数字原住民</p>
            <div className="cta-buttons">
              <Link to="/courses" className="btn btn-primary">
                浏览课程
              </Link>
              <Link to="/contact" className="btn btn-outline">
                联系我们
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;