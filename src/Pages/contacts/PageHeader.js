import React from 'react';

const pageHeaderData = {
  title: 'Contacts',
  breadcrumbs: [
    {
      label: 'Home',
      link: 'https://wgl-dsites.net/bili/light/',
      isCurrent: false,
    },
    {
      label: 'Contacts',
      isCurrent: true,
    },
  ],
  styles: {
    minHeight: '320px',
    paddingTop: '54px',
    paddingBottom: '60px',
    titleColor: '#232323',
    titleFontSize: '48px',
    titleLineHeight: '60px',
    breadcrumbsColor: '#232323',
    breadcrumbsFontSize: '14px',
    breadcrumbsLineHeight: '34px',
  },
};

const PageHeader = () => {
  return (
    <div
      className="page-header page-header_align_center"
      style={{
        minHeight: pageHeaderData.styles.minHeight,
        marginBottom: '0px',
        paddingTop: pageHeaderData.styles.paddingTop,
        paddingBottom: pageHeaderData.styles.paddingBottom,
      }}
    >
      <div className="page-header_wrapper">
        <div className="wgl-container">
          <div className="page-header_content">
            <div
              className="page-header_title"
              style={{
                color: pageHeaderData.styles.titleColor,
                fontSize: pageHeaderData.styles.titleFontSize,
                lineHeight: pageHeaderData.styles.titleLineHeight,
                letterSpacing: '0em',
              }}
            >
              {pageHeaderData.title}
            </div>
            <div
              className="page-header_breadcrumbs"
              style={{
                color: pageHeaderData.styles.breadcrumbsColor,
                fontSize: pageHeaderData.styles.breadcrumbsFontSize,
                lineHeight: pageHeaderData.styles.breadcrumbsLineHeight,
                letterSpacing: '0.1em',
              }}
            >
              <div className="breadcrumbs">
                {pageHeaderData.breadcrumbs.map((crumb, index) => (
                  <React.Fragment key={index}>
                    {crumb.isCurrent ? (
                      <span className="current">{crumb.label}</span>
                    ) : (
                      <>
                        <a href={crumb.link} className="home">
                          {crumb.label}
                        </a>
                        <span className="divider">/</span>
                      </>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {/* .breadcrumbs */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
