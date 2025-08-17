import React, { useState } from 'react';
import { Search, ChevronDown, ChevronRight, Book, Video, Download, MessageCircle, Phone, Mail } from 'lucide-react';
import './Help.css';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const Help: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const faqData: FAQItem[] = [
    {
      id: 1,
      question: '如何注册账号？',
      answer: '点击页面右上角的"免费注册"按钮，填写必要信息即可完成注册。注册后您将收到确认邮件，点击邮件中的链接激活账号。',
      category: 'account'
    },
    {
      id: 2,
      question: '忘记密码怎么办？',
      answer: '在登录页面点击"忘记密码"链接，输入您的邮箱地址，我们会发送重置密码的链接到您的邮箱。',
      category: 'account'
    },
    {
      id: 3,
      question: '如何选择适合的课程？',
      answer: '我们建议根据孩子的年龄和编程基础选择课程。6-8岁推荐Scratch图形化编程，9-12岁可以学习Python，13岁以上可以尝试JavaScript和更高级的编程语言。',
      category: 'course'
    },
    {
      id: 4,
      question: '课程可以试听吗？',
      answer: '是的，我们为每门课程都提供免费试听。您可以在课程详情页点击"免费试听"按钮，或联系我们的课程顾问安排试听。',
      category: 'course'
    },
    {
      id: 5,
      question: '如何查看学习进度？',
      answer: '登录后在"我的学习"页面可以查看详细的学习进度，包括已完成的课程、作业提交情况、学习时长等信息。',
      category: 'learning'
    },
    {
      id: 6,
      question: '作业如何提交？',
      answer: '在课程学习页面，完成每节课后会有相应的作业。点击"提交作业"按钮，上传您的代码文件或项目文件即可。',
      category: 'learning'
    },
    {
      id: 7,
      question: '支持哪些支付方式？',
      answer: '我们支持微信支付、支付宝、银行卡支付等多种支付方式。所有支付都通过安全加密通道处理。',
      category: 'payment'
    },
    {
      id: 8,
      question: '可以退款吗？',
      answer: '在课程开始后7天内，如果您对课程不满意，可以申请全额退款。超过7天的退款将根据学习进度按比例退还。',
      category: 'payment'
    },
    {
      id: 9,
      question: '技术问题如何解决？',
      answer: '如果遇到技术问题，可以通过在线客服、邮件或电话联系我们。我们的技术支持团队会在24小时内回复您。',
      category: 'technical'
    },
    {
      id: 10,
      question: '系统要求是什么？',
      answer: '我们的平台支持Windows、Mac、Linux系统，推荐使用Chrome、Firefox、Safari等现代浏览器。移动端支持iOS和Android系统。',
      category: 'technical'
    }
  ];

  const categories = [
    { id: 'all', name: '全部', icon: Book },
    { id: 'account', name: '账号相关', icon: MessageCircle },
    { id: 'course', name: '课程相关', icon: Video },
    { id: 'learning', name: '学习相关', icon: Book },
    { id: 'payment', name: '支付相关', icon: Download },
    { id: 'technical', name: '技术支持', icon: Phone }
  ];

  const filteredFAQ = faqData.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="help-page">
      {/* 页面头部 */}
      <section className="help-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">帮助中心</h1>
            <p className="hero-subtitle">
              在这里找到您需要的答案，或联系我们获得更多帮助
            </p>
            
            {/* 搜索框 */}
            <div className="search-container">
              <div className="search-box">
                <Search className="search-icon" size={20} />
                <input
                  type="text"
                  placeholder="搜索问题或关键词..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 快速链接 */}
      <section className="quick-links">
        <div className="container">
          <div className="quick-links-grid">
            <a href="#faq" className="quick-link">
              <Book size={32} />
              <h3>常见问题</h3>
              <p>查看最常见的问题和解答</p>
            </a>
            <a href="#contact" className="quick-link">
              <MessageCircle size={32} />
              <h3>在线客服</h3>
              <p>与我们的客服团队实时对话</p>
            </a>
            <a href="#tutorials" className="quick-link">
              <Video size={32} />
              <h3>视频教程</h3>
              <p>观看详细的操作指导视频</p>
            </a>
            <a href="#downloads" className="quick-link">
              <Download size={32} />
              <h3>资料下载</h3>
              <p>下载学习资料和工具</p>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ部分 */}
      <section id="faq" className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>常见问题</h2>
            <p>以下是用户最常询问的问题，希望能帮助您快速找到答案</p>
          </div>
          
          <div className="faq-content">
            {/* 分类筛选 */}
            <div className="category-filters">
              {categories.map(category => {
                const IconComponent = category.icon;
                return (
                  <button
                    key={category.id}
                    className={`category-btn ${
                      selectedCategory === category.id ? 'active' : ''
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <IconComponent size={18} />
                    {category.name}
                  </button>
                );
              })}
            </div>
            
            {/* FAQ列表 */}
            <div className="faq-list">
              {filteredFAQ.length > 0 ? (
                filteredFAQ.map(item => (
                  <div key={item.id} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleExpanded(item.id)}
                    >
                      <span>{item.question}</span>
                      {expandedItems.includes(item.id) ? (
                        <ChevronDown size={20} />
                      ) : (
                        <ChevronRight size={20} />
                      )}
                    </button>
                    {expandedItems.includes(item.id) && (
                      <div className="faq-answer">
                        <p>{item.answer}</p>
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <Search size={48} />
                  <h3>没有找到相关问题</h3>
                  <p>请尝试其他关键词或联系我们的客服团队</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 联系支持 */}
      <section id="contact" className="contact-support">
        <div className="container">
          <div className="section-header">
            <h2>还需要帮助？</h2>
            <p>如果您没有找到答案，请通过以下方式联系我们</p>
          </div>
          
          <div className="support-options">
            <div className="support-option">
              <div className="support-icon">
                <MessageCircle size={32} />
              </div>
              <h3>在线客服</h3>
              <p>工作时间：9:00-18:00</p>
              <button className="support-btn">开始对话</button>
            </div>
            
            <div className="support-option">
              <div className="support-icon">
                <Phone size={32} />
              </div>
              <h3>电话支持</h3>
              <p>400-123-4567</p>
              <button className="support-btn">立即拨打</button>
            </div>
            
            <div className="support-option">
              <div className="support-icon">
                <Mail size={32} />
              </div>
              <h3>邮件支持</h3>
              <p>support@kidscoding.com</p>
              <button className="support-btn">发送邮件</button>
            </div>
          </div>
        </div>
      </section>

      {/* 教程和资源 */}
      <section id="tutorials" className="resources-section">
        <div className="container">
          <div className="section-header">
            <h2>教程和资源</h2>
            <p>更多学习资源和操作指南</p>
          </div>
          
          <div className="resources-grid">
            <div className="resource-item">
              <div className="resource-icon">
                <Video size={40} />
              </div>
              <h3>Scratch编程入门</h3>
              <p>适合6-12岁儿童的图形化编程入门教程</p>
              <a href="https://www.bilibili.com/video/BV1Ux411d75J" target="_blank" rel="noopener noreferrer" className="resource-link">观看视频</a>
            </div>
            
            <div className="resource-item">
              <div className="resource-icon">
                <Video size={40} />
              </div>
              <h3>Python少儿编程</h3>
              <p>Python基础语法和编程思维培养课程</p>
              <a href="https://www.bilibili.com/video/BV1ex411x7Em" target="_blank" rel="noopener noreferrer" className="resource-link">观看视频</a>
            </div>
            
            <div className="resource-item">
              <div className="resource-icon">
                <Video size={40} />
              </div>
              <h3>机器人编程</h3>
              <p>乐高机器人编程和人工智能启蒙</p>
              <a href="https://www.bilibili.com/video/BV1Jx411d7Gg" target="_blank" rel="noopener noreferrer" className="resource-link">观看视频</a>
            </div>
            
            <div className="resource-item">
              <div className="resource-icon">
                <Video size={40} />
              </div>
              <h3>JavaScript游戏开发</h3>
              <p>制作简单的网页游戏，学习编程逻辑</p>
              <a href="https://www.bilibili.com/video/BV1Yx411d7yf" target="_blank" rel="noopener noreferrer" className="resource-link">观看视频</a>
            </div>
            
            <div className="resource-item">
              <div className="resource-icon">
                <Book size={40} />
              </div>
              <h3>编程学习指南</h3>
              <p>如何培养孩子的编程思维和学习方法</p>
              <a href="https://www.runoob.com/python/python-tutorial.html" target="_blank" rel="noopener noreferrer" className="resource-link">阅读文档</a>
            </div>
            
            <div className="resource-item">
              <div className="resource-icon">
                <Download size={40} />
              </div>
              <h3>开发工具下载</h3>
              <p>Scratch、Python IDLE等编程学习必备工具</p>
              <a href="https://scratch.mit.edu/download" target="_blank" rel="noopener noreferrer" className="resource-link">立即下载</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;