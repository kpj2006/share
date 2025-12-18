import React, { useEffect, useRef } from 'react';
import '../src/social-share-button.css';

export const SocialShareButton = ({
  url = window.location.href,
  title = document.title,
  description = '',
  hashtags = [],
  via = '',
  platforms = ['whatsapp', 'facebook', 'twitter', 'linkedin', 'telegram', 'reddit'],
  theme = 'dark',
  buttonText = 'Share',
  customClass = '',
  onShare = null,
  onCopy = null,
  buttonStyle = 'default',
  modalPosition = 'center'
}) => {
  const containerRef = useRef(null);
  const shareButtonRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !shareButtonRef.current) {
      // Import the SocialShareButton class
      if (typeof window !== 'undefined' && window.SocialShareButton) {
        shareButtonRef.current = new window.SocialShareButton({
          container: containerRef.current,
          url,
          title,
          description,
          hashtags,
          via,
          platforms,
          theme,
          buttonText,
          customClass,
          onShare,
          onCopy,
          buttonStyle,
          modalPosition
        });
      }
    }

    return () => {
      if (shareButtonRef.current) {
        shareButtonRef.current.destroy();
        shareButtonRef.current = null;
      }
    };
  }, []);

  // Update options when props change
  useEffect(() => {
    if (shareButtonRef.current) {
      shareButtonRef.current.updateOptions({
        url,
        title,
        description,
        hashtags,
        via,
        platforms,
        theme,
        buttonText,
        customClass,
        onShare,
        onCopy,
        buttonStyle,
        modalPosition
      });
    }
  }, [url, title, description, hashtags, via, platforms, theme, buttonText, customClass, onShare, onCopy, buttonStyle, modalPosition]);

  return <div ref={containerRef}></div>;
};

export default SocialShareButton;
