import React from "react";
import { useNavigate } from 'react-router-dom';
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faCalendar, faUser, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import '../assets/styles/Articles.scss';
import '../assets/styles/ArticlesPage.scss';

interface Article {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string[];
  readTime: number;
  image: string;
  link?: string;  // رابط المقال الخارجي (اختياري)
}

const articlesData: Article[] = [
  {
   id: 1,
    title: "Case Study: Strategic Rise, Capitalization, and Market Disruption of Team Falcons", 
    excerpt: "Discover how Team Falcons transformed from a regional esports organization into a global powerhouse through strategic investment, superteam construction, content creator integration, and alignment with Saudi Vision 2030.",
    content: "Learn how Team Falcons built a global esports powerhouse through strategic growth, investment, and brand development.",
    author: "Abdelrahman Sobhy",
    date: "2026-07-27",
    category: ["Esports", "Business Strategy", "Brand Strategy", "Case Study"],
    readTime: 8,
    image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1785618502/1785062103619_lzqekt.png",
    link: "https://www.linkedin.com/pulse/case-study-strategic-rise-capitalization-market-disruption-sobhy-5gzrf/?trackingId=xRQ1yBIheNcSP19V6HiZSw%3D%3D",
  },
  {
    id: 2,
    title: "Follow the Money: How the Esports Ecosystem Really Makes Money",
    excerpt: "Discover how money flows across the esports ecosystem and why understanding this economic cycle is essential for marketers, teams, brands, and creators.",
    content: "A breakdown of the esports economy, exploring how publishers, teams, tournaments, creators, sponsors, and fans drive sustainable industry growth.",
    author: "Abdelrahman Sobhy",
    date: "2026-07-18",
    category: ["Esports", "Esports Marketing", "Industry Insights"],
    readTime: 6,
    image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1785619174/1784365055178_ug50nt.jpg",
    link: "https://www.linkedin.com/pulse/follow-money-how-esports-ecosystem-really-makes-abdelrahman-sobhy-qwfpe/?trackingId=U1r1IcRtPObaoKpV7JpPDw%3D%3D",
  },
  // {
  //   id: 3,
  //   title: "Mastering GA4: Advanced Analytics for Performance Marketers",
  //   excerpt: "Deep dive into GA4 configuration, custom events, and data-driven optimization strategies.",
  //   content: "GA4 requires a different mindset than Universal Analytics. Learn how to set up proper tracking and extract actionable insights.",
  //   author: "Abdelrahman Sobhy",
  //   date: "2025-01-05",
  //   category: ["GA4", "Analytics", "Tracking"],
  //   readTime: 10,
  //   image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1769972248/Gemini_Generated_Image_ydjzujydjzujydjz_tm3aj0.png"
  // },
  // {
  //   id: 4,
  //   title: "TikTok Ads Mastery: Viral Ads Strategy That Actually Converts",
  //   excerpt: "How to create native TikTok ads that don't look like ads and drive real conversions.",
  //   content: "TikTok advertising requires authenticity and creativity. Discover the unique approach that makes TikTok campaigns outperform traditional platforms.",
  //   author: "Abdelrahman Sobhy",
  //   date: "2024-12-28",
  //   category: ["TikTok Ads", "Creative", "Viral Marketing"],
  //   readTime: 7,
  //   image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1769972248/Gemini_Generated_Image_ydjzujydjzujydjz_tm3aj0.png"
  // },
  // {
  //   id: 5,
  //   title: "Pixel Setup Errors That Are Killing Your ROAS",
  //   excerpt: "Common pixel configuration mistakes and how to audit your tracking for accuracy.",
  //   content: "A poorly configured pixel can waste your entire ad budget. Learn the red flags and how to conduct a complete pixel audit.",
  //   author: "Abdelrahman Sobhy",
  //   date: "2024-12-20",
  //   category: ["Pixel", "CAPI", "Tracking"],
  //   readTime: 5,
  //   image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1769972248/Gemini_Generated_Image_ydjzujydjzujydjz_tm3aj0.png"
  // },
  // {
  //   id: 6,
  //   title: "Creative Testing Framework: How to Scale Winners Faster",
  //   excerpt: "A systematic approach to testing and scaling high-performing creative assets.",
  //   content: "Creative testing isn't random. This framework helps you identify winning hooks, angles, and offers consistently.",
  //   author: "Abdelrahman Sobhy",
  //   date: "2024-12-15",
  //   category: ["Creative", "Testing", "Scaling"],
  //   readTime: 9,
  //   image: "https://res.cloudinary.com/di2ydexdo/image/upload/v1769972248/Gemini_Generated_Image_ydjzujydjzujydjz_tm3aj0.png"
  // },
];

function ArticlesPreview() {
  const navigate = useNavigate();
  
  // عرض أول 3 مقالات فقط
  const previewArticles = articlesData.slice(0, 3);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="articles-preview-container" id="articles">
      <div className="items-container">
        <div className="articles-wrapper">
          <div className="articles-header">
            <h1><FontAwesomeIcon icon={faNewspaper} /> Latest Articles</h1>
            <p>Insights, strategies, and tips on performance marketing, analytics, and digital growth</p>
          </div>

          {/* Articles Grid - Only 3 articles */}
          <div className="articles-grid articles-grid-3">
            {previewArticles.map((article) => (
              <div key={article.id} className="article-card">
                <div className="article-image-wrapper">
                  {article.link ? (
                      <a href={article.link} target="_blank" rel="noreferrer">
                        <img src={article.image} alt={article.title} className="article-image" />
                      </a>
                    ) : (
                      <img src={article.image} alt={article.title} className="article-image" />
                    )}
                  <div className="read-time-badge">{article.readTime} min read</div>
                </div>

                <div className="article-content">
                  {/* Categories */}
                  <div className="article-categories">
                    {article.category.slice(0, 2).map((cat, index) => (
                      <Chip
                        key={index}
                        label={cat}
                        size="small"
                        className="article-chip"
                      />
                    ))}
                  </div>

                  {/* Title */}
                  {article.link ? (
                      <a href={article.link} target="_blank" rel="noreferrer">
                        <h3 className="article-title">{article.title}</h3>
                      </a>
                    ) : (
                      <h3 className="article-title">{article.title}</h3>
                    )}

                  {/* Excerpt */}
                  <p className="article-excerpt">{article.excerpt}</p>

                  {/* Meta Info */}
                  <div className="article-meta">
                    <div className="meta-item">
                      <FontAwesomeIcon icon={faUser} />
                      <span>{article.author}</span>
                    </div>
                    <div className="meta-item">
                      <FontAwesomeIcon icon={faCalendar} />
                      <span>{formatDate(article.date)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* See More Button */}
          <div className="see-more-container">
            <Button
              variant="contained"
              size="large"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
              className="see-more-btn"
              onClick={() => navigate('/articles')}
            >
              See All Articles
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesPreview;
