import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, BookOpen, Users, Phone, HelpCircle, ChevronDown } from 'lucide-react';
import './Header.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          {/* Logo */}
          <Link to="/" className="logo">
            <div className="logo-icon">
              <BookOpen size={32} />
            </div>
            <div className="logo-text">
              <span className="logo-title">少儿编程</span>
              <span className="logo-subtitle">Kids Code</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
            >
              首页
            </Link>
            
            {/* 课程下拉菜单 */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <Link 
                to="/courses" 
                className={`nav-link ${isActive('/courses') || location.pathname.startsWith('/course/') ? 'active' : ''}`}
              >
                课程中心
                <ChevronDown size={16} className="dropdown-icon" />
              </Link>
              
              {isCoursesDropdownOpen && (
                <div className="dropdown-menu">
                  <Link to="/courses/scratch" className="dropdown-item">
                    <span className="course-icon">🎮</span>
                    Scratch编程
                  </Link>
                  <Link to="/courses/python" className="dropdown-item">
                    <span className="course-icon">🐍</span>
                    Python编程
                  </Link>
                  <Link to="/courses/javascript" className="dropdown-item">
                    <span className="course-icon">💻</span>
                    JavaScript
                  </Link>
                  <Link to="/courses/robot" className="dropdown-item">
                    <span className="course-icon">🤖</span>
                    机器人编程
                  </Link>
                  <Link to="/courses/ai" className="dropdown-item">
                    <span className="course-icon">🧠</span>
                    人工智能
                  </Link>
                </div>
              )}
            </div>
            
            <Link 
              to="/teachers" 
              className={`nav-link ${isActive('/teachers') ? 'active' : ''}`}
            >
              师资团队
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
            >
              关于我们
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
            >
              联系我们
            </Link>
          </nav>

          {/* User Actions */}
          <div className="user-actions">
            <Link to="/help" className="help-link">
              <HelpCircle size={20} />
              <span>帮助</span>
            </Link>
            <Link to="/login" className="login-link">
              <User size={20} />
              <span>登录</span>
            </Link>
            <Link to="/register" className="btn btn-primary">
              免费注册
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMenu}
            aria-label="切换菜单"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <Link 
            to="/" 
            className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            首页
          </Link>
          <Link 
            to="/courses" 
            className={`mobile-nav-link ${isActive('/courses') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            课程中心
          </Link>
          <Link 
            to="/teachers" 
            className={`mobile-nav-link ${isActive('/teachers') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            师资团队
          </Link>
          <Link 
            to="/about" 
            className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            关于我们
          </Link>
          <Link 
            to="/contact" 
            className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(false)}
          >
            联系我们
          </Link>
          <div className="mobile-user-actions">
            <Link 
              to="/login" 
              className="mobile-nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              登录
            </Link>
            <Link 
              to="/register" 
              className="btn btn-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              免费注册
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;