import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, User, Phone, Smartphone, MessageCircle } from 'lucide-react';
import './Auth.css';

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // 清除对应字段的错误信息
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!formData.username.trim()) {
      newErrors.username = '请输入用户名';
    } else if (formData.username.length < 2) {
      newErrors.username = '用户名至少2个字符';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱地址';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = '请输入手机号码';
    } else if (!/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    if (!formData.password) {
      newErrors.password = '请输入密码';
    } else if (formData.password.length < 6) {
      newErrors.password = '密码至少6个字符';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = '请确认密码';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = '两次输入的密码不一致';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = '请同意服务条款和隐私政策';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    // 模拟注册请求
    setTimeout(() => {
      setIsLoading(false);
      alert('注册功能正在开发中，敬请期待！');
    }, 1500);
  };

  const handleSocialRegister = (provider: string) => {
    alert(`${provider}注册功能正在开发中，敬请期待！`);
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <div className="auth-content">
          {/* 左侧信息 */}
          <div className="auth-info">
            <div className="auth-info-content">
              <h2>加入我们</h2>
              <p>开启孩子的编程学习之旅</p>
              <div className="auth-features">
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>🎯</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>个性化学习</h4>
                    <p>根据孩子的能力定制学习计划</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>🏆</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>成就系统</h4>
                    <p>完成任务获得徽章和奖励</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">
                    <div className="icon-circle">
                      <span>👥</span>
                    </div>
                  </div>
                  <div className="feature-text">
                    <h4>社区交流</h4>
                    <p>与其他小朋友分享作品和经验</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧注册表单 */}
          <div className="auth-form-section">
            <div className="auth-form-container">
              <div className="auth-header">
                <h1>创建账户</h1>
                <p>填写信息完成注册，开始学习之旅</p>
              </div>

              {/* 第三方注册 */}
              <div className="social-login">
                <button 
                  className="social-btn wechat"
                  onClick={() => handleSocialRegister('微信')}
                >
                  <MessageCircle size={20} />
                  <span>微信注册</span>
                </button>
                <button 
                  className="social-btn alipay"
                  onClick={() => handleSocialRegister('支付宝')}
                >
                  <Smartphone size={20} />
                  <span>支付宝注册</span>
                </button>
              </div>

              <div className="divider">
                <span>或使用邮箱注册</span>
              </div>

              {/* 注册表单 */}
              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="username">用户名</label>
                  <div className="input-wrapper">
                    <User className="input-icon" size={20} />
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="请输入用户名"
                      className={errors.username ? 'error' : ''}
                    />
                  </div>
                  {errors.username && <span className="error-message">{errors.username}</span>}
                </div>

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
                      placeholder="请输入邮箱地址"
                      className={errors.email ? 'error' : ''}
                    />
                  </div>
                  {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">手机号码</label>
                  <div className="input-wrapper">
                    <Phone className="input-icon" size={20} />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="请输入手机号码"
                      className={errors.phone ? 'error' : ''}
                    />
                  </div>
                  {errors.phone && <span className="error-message">{errors.phone}</span>}
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
                      placeholder="请输入密码（至少6位）"
                      className={errors.password ? 'error' : ''}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="confirmPassword">确认密码</label>
                  <div className="input-wrapper">
                    <Lock className="input-icon" size={20} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="请再次输入密码"
                      className={errors.confirmPassword ? 'error' : ''}
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                  {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                </div>

                <div className="form-group">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onChange={handleInputChange}
                    />
                    <span className="checkbox-custom"></span>
                    我已阅读并同意
                    <Link to="/terms" className="terms-link">服务条款</Link>
                    和
                    <Link to="/privacy" className="terms-link">隐私政策</Link>
                  </label>
                  {errors.agreeTerms && <span className="error-message">{errors.agreeTerms}</span>}
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary auth-submit"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <div className="spinner"></div>
                      注册中...
                    </>
                  ) : (
                    '创建账户'
                  )}
                </button>
              </form>

              <div className="auth-footer">
                <p>
                  已有账户？
                  <Link to="/login" className="auth-link">
                    立即登录
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

export default Register;