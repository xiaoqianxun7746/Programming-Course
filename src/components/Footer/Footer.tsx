import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Phone, Mail, MapPin, MessageCircle, Smartphone, X } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const [qrModal, setQrModal] = useState<{ isOpen: boolean; type: string; title: string }>({ 
    isOpen: false, 
    type: '', 
    title: '' 
  });

  const openQrModal = (type: string, title: string) => {
    setQrModal({ isOpen: true, type, title });
  };

  const closeQrModal = () => {
    setQrModal({ isOpen: false, type: '', title: '' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* 品牌信息 */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-icon">
                <BookOpen size={28} />
              </div>
              <div className="logo-text">
                <span className="logo-title">少儿编程</span>
                <span className="logo-subtitle">Kids Code</span>
              </div>
            </div>
            <p className="footer-description">
              专业的少儿编程教育平台，致力于培养孩子的逻辑思维和创新能力。
              让每个孩子都能在编程的世界里发现无限可能。
            </p>
            <div className="social-links">
              <div className="social-item" onClick={() => openQrModal('wechat', '微信客服')}>
                <MessageCircle size={20} />
                <span>微信客服</span>
              </div>
              <div className="social-item" onClick={() => openQrModal('alipay', '支付宝')}>
                <Smartphone size={20} />
                <span>支付宝</span>
              </div>
            </div>
          </div>

          {/* 快速链接 */}
          <div className="footer-section">
            <h4>快速导航</h4>
            <ul className="footer-links">
              <li><Link to="/courses">课程中心</Link></li>
              <li><Link to="/teachers">师资团队</Link></li>
              <li><Link to="/about">关于我们</Link></li>
              <li><Link to="/contact">联系我们</Link></li>
              <li><Link to="/help">帮助中心</Link></li>
            </ul>
          </div>

          {/* 课程分类 */}
          <div className="footer-section">
            <h4>热门课程</h4>
            <ul className="footer-links">
              <li><Link to="/courses?category=scratch">Scratch编程</Link></li>
              <li><Link to="/courses?category=python">Python编程</Link></li>
              <li><Link to="/courses?category=javascript">JavaScript</Link></li>
              <li><Link to="/courses?category=robotics">机器人编程</Link></li>
              <li><Link to="/courses?category=ai">人工智能</Link></li>
            </ul>
          </div>

          {/* 联系信息 */}
          <div className="footer-section">
            <h4>联系我们</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone size={16} />
                <span>400-123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>contact@kidscode.com</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>北京市朝阳区编程大厦8层</span>
              </div>
            </div>
            <div className="qr-code">
              <div className="qr-placeholder" onClick={() => openQrModal('follow', '扫码关注')}>
                <MessageCircle size={40} />
                <span>扫码关注</span>
              </div>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 少儿编程教育平台. 保留所有权利.</p>
            <div className="footer-bottom-links">
              <Link to="/privacy">隐私政策</Link>
              <Link to="/terms">服务条款</Link>
              <Link to="/sitemap">网站地图</Link>
            </div>
          </div>
        </div>
      </div>

      {/* 二维码弹窗 */}
      {qrModal.isOpen && (
        <div className="qr-modal-overlay" onClick={closeQrModal}>
          <div className="qr-modal" onClick={(e) => e.stopPropagation()}>
            <div className="qr-modal-header">
              <h3>{qrModal.title}</h3>
              <button className="qr-modal-close" onClick={closeQrModal}>
                <X size={20} />
              </button>
            </div>
            <div className="qr-modal-content">
              <div className="qr-code-display">
                {qrModal.type === 'wechat' && (
                  <div className="qr-placeholder-large">
                    <MessageCircle size={80} />
                    <p>微信客服二维码</p>
                    <span>扫描添加客服微信</span>
                  </div>
                )}
                {qrModal.type === 'alipay' && (
                  <div className="qr-placeholder-large">
                    <Smartphone size={80} />
                    <p>支付宝二维码</p>
                    <span>扫描关注支付宝生活号</span>
                  </div>
                )}
                {qrModal.type === 'follow' && (
                  <div className="qr-placeholder-large">
                    <MessageCircle size={80} />
                    <p>关注我们</p>
                    <span>扫描关注获取更多资讯</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;