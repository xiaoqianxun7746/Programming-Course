import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, User, FileText } from 'lucide-react';
import './Contact.css';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('表单数据:', formData);
    alert('感谢您的留言！我们会尽快与您联系。');
    // 重置表单
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      {/* 页面头部 */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">联系我们</h1>
            <p className="hero-subtitle">
              有任何问题或建议？我们很乐意为您提供帮助
            </p>
          </div>
        </div>
      </section>

      {/* 联系信息和表单 */}
      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            {/* 联系信息 */}
            <div className="contact-info">
              <h2>联系信息</h2>
              <p className="contact-description">
                我们的专业团队随时为您提供支持，欢迎通过以下方式与我们联系。
              </p>
              
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>地址</h4>
                    <p>北京市朝阳区科技园区创新大厦8楼</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Phone size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>电话</h4>
                    <p>400-123-4567</p>
                    <p>010-8888-9999</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Mail size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>邮箱</h4>
                    <p>info@kidscoding.com</p>
                    <p>support@kidscoding.com</p>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <Clock size={24} />
                  </div>
                  <div className="contact-details">
                    <h4>工作时间</h4>
                    <p>周一至周五：9:00 - 18:00</p>
                    <p>周六至周日：10:00 - 17:00</p>
                  </div>
                </div>
              </div>
              
              {/* 社交媒体 */}
              <div className="social-media">
                <h4>关注我们</h4>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <MessageCircle size={20} />
                    <span>微信</span>
                  </a>
                  <a href="#" className="social-link">
                    <MessageCircle size={20} />
                    <span>QQ</span>
                  </a>
                  <a href="#" className="social-link">
                    <MessageCircle size={20} />
                    <span>微博</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* 联系表单 */}
            <div className="contact-form-container">
              <h2>发送消息</h2>
              <p className="form-description">
                请填写以下表单，我们会在24小时内回复您。
              </p>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      姓名 *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      邮箱 *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      电话
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="请输入您的电话号码"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="subject">
                      <FileText size={18} />
                      主题 *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">请选择咨询主题</option>
                      <option value="course">课程咨询</option>
                      <option value="price">价格咨询</option>
                      <option value="teacher">师资咨询</option>
                      <option value="technical">技术支持</option>
                      <option value="cooperation">合作洽谈</option>
                      <option value="other">其他问题</option>
                    </select>
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">
                    <MessageCircle size={18} />
                    留言内容 *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    placeholder="请详细描述您的问题或需求..."
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-btn">
                  <Send size={20} />
                  发送消息
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* 常见问题 */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>常见问题</h2>
            <p>以下是一些常见问题的解答，希望对您有帮助</p>
          </div>
          
          <div className="faq-grid">
            <div className="faq-item">
              <h4>Q: 孩子多大可以开始学习编程？</h4>
              <p>A: 我们建议6岁以上的孩子开始学习编程。我们有针对不同年龄段的课程，从图形化编程到代码编程，循序渐进。</p>
            </div>
            
            <div className="faq-item">
              <h4>Q: 课程是线上还是线下？</h4>
              <p>A: 我们提供线上和线下两种授课方式，您可以根据孩子的情况和个人偏好选择合适的学习方式。</p>
            </div>
            
            <div className="faq-item">
              <h4>Q: 如何了解孩子的学习进度？</h4>
              <p>A: 我们有完善的学习跟踪系统，家长可以实时了解孩子的学习进度、作业完成情况和老师的反馈。</p>
            </div>
            
            <div className="faq-item">
              <h4>Q: 是否提供试听课程？</h4>
              <p>A: 是的，我们为每位新学员提供免费试听课程，让孩子和家长充分了解我们的教学方式和课程内容。</p>
            </div>
            
            <div className="faq-item">
              <h4>Q: 课程费用如何收取？</h4>
              <p>A: 我们提供灵活的付费方式，包括按课时、按月、按季度等多种选择，具体费用请咨询我们的课程顾问。</p>
            </div>
            
            <div className="faq-item">
              <h4>Q: 如果孩子跟不上课程进度怎么办？</h4>
              <p>A: 我们采用小班教学和个性化辅导，老师会根据每个孩子的学习情况调整教学节奏，确保每个孩子都能跟上。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;