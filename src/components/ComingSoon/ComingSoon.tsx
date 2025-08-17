import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowLeft, Sparkles } from 'lucide-react';
import './ComingSoon.css';

interface ComingSoonProps {
  title: string;
  description?: string;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ 
  title, 
  description = "我们正在努力开发中，敬请期待！" 
}) => {
  return (
    <div className="coming-soon">
      <div className="container">
        <div className="coming-soon-content">
          <div className="coming-soon-icon">
            <div className="icon-wrapper">
              <Clock size={64} />
              <div className="sparkle sparkle-1">
                <Sparkles size={16} />
              </div>
              <div className="sparkle sparkle-2">
                <Sparkles size={12} />
              </div>
              <div className="sparkle sparkle-3">
                <Sparkles size={14} />
              </div>
            </div>
          </div>
          
          <h1 className="coming-soon-title">{title}</h1>
          <p className="coming-soon-description">{description}</p>
          
          <div className="coming-soon-features">
            <div className="feature-item">
              <div className="feature-icon">
                <div className="pulse-dot"></div>
              </div>
              <span>精心设计中</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <div className="pulse-dot"></div>
              </div>
              <span>即将上线</span>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <div className="pulse-dot"></div>
              </div>
              <span>敬请期待</span>
            </div>
          </div>
          
          <div className="coming-soon-actions">
            <Link to="/" className="btn btn-primary">
              <ArrowLeft size={20} />
              返回首页
            </Link>
            <Link to="/courses" className="btn btn-outline">
              浏览课程
            </Link>
          </div>
          
          <div className="progress-indicator">
            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
            <span className="progress-text">开发进度 75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;