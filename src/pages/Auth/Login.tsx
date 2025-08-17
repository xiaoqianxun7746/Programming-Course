import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, Smartphone, MessageCircle } from 'lucide-react';
import './Auth.css';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // 模拟登录请求
    setTimeout(() => {
      setIsLoading(false);
      alert('登录功能正在开发中，敬请期待！');
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    alert(`${provider}登录功能正在开发中，敬请期待！`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          {/* 左侧信息 */}
          <div className="auth-info">
            <div className="auth-info-content">
              <h2>欢迎回来</h2>
              <p>继续您孩子的编程学习之旅</p>
              <div className="auth-features">
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>📚</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>丰富课程</h4>
                    <p>从入门到进阶的完整课程体系</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>👨‍🏫</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>专业师资</h4>
                    <p>经验丰富的编程教育专家</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>🎮</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>趣味学习</h4>
                    <p>游戏化教学，让学习更有趣</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧登录表单 */}
          <div className="auth-form-section">
            <div className="auth-form-container">
              <div className="auth-header">
                <h1>登录账户</h1>
                <p>使用您的邮箱或第三方账户登录</p>
              </div>

              {/* 第三方登录 */}
              <div className="social-login">
                <button 
                  className="social-btn wechat"
                  onClick={() => handleSocialLogin('微信')}
                >
                  <MessageCircle size={20} />
                  <span>微信登录</span>
                </button>
                <button 
                  className="social-btn alipay"
                  onClick={() => handleSocialLogin('支付宝')}
                >
                  <Smartphone size={20} />
                  <span>支付宝登录</span>
                </button>
              </div>

              <div className="divider">
                <span>或使用邮箱登录</span>
              </div>

              {/* 邮箱登录表单 */}
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email">邮箱地址</label>
                  <div className="input-wrapper">
                    <Mail className="input-icon" size={20} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="请输入您的邮箱地址"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="password">密码</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="请输入您的密码"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="form-options">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formData.rememberMe}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-custom"></span>
                    记住我
                  </label>
                  <Link to="/forgot-password" className="forgot-link">
                    忘记密码？
                  </Link>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary auth-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      登录中...
                    </>
                  ) : (
                    '登录'
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  还没有账户？
                  <Link to="/register" className="auth-link">
                    立即注册
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;