// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/al-folio/";
    },
  },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/news/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Selected publications, grouped as in the CV.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/publications/";
          },
        },{id: "nav-talks-amp-media",
          title: "Talks &amp; Media",
          description: "Public lectures and podcasts, op-eds and commentary, policy memos.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/talks/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "Education, positions, publications, awards, and service.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "How to reach me.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/al-folio/contact/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-dismissed-from-the-european-university-at-st-petersburg-after-signing-an-anti-war-petition-the-moscow-times-coverage",
          title: 'Dismissed from the European University at St. Petersburg after signing an anti-war petition....',
          description: "",
          section: "News",},{id: "news-amerikantsy-i-vse-ostalnye-alpina-2024-won-the-prosvetitel-award-for-the-best-non-fiction-book-in-russian-english-translation-forthcoming-from-palgrave-macmillan-in-june-2026",
          title: 'Amerikantsy i vse ostalnye (Alpina, 2024) won the Prosvetitel award for the best...',
          description: "",
          section: "News",},{id: "news-battle-for-the-past-how-politics-rewrites-history-published-by-palgrave-macmillan-english-translation-of-the-2022-russian-original",
          title: 'Battle for the Past: How Politics Rewrites History published by Palgrave Macmillan (English...',
          description: "",
          section: "News",},{id: "news-joined-the-ohio-state-university-as-visiting-professor-of-history-for-2025-2026",
          title: 'Joined The Ohio State University as Visiting Professor of History for 2025–2026.',
          description: "",
          section: "News",},{id: "news-distant-friends-and-intimate-enemies-a-history-of-american-russian-relations-co-authored-with-david-s-foglesong-and-victoria-zhuravleva-is-out-from-cambridge-university-press",
          title: 'Distant Friends and Intimate Enemies: A History of American–Russian Relations, co-authored with David...',
          description: "",
          section: "News",},{id: "news-designated-a-foreign-agent-by-the-russian-ministry-of-justice-rasa-statement-of-support",
          title: 'Designated a “foreign agent” by the Russian Ministry of Justice. RASA statement of...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%76%61%6E.%69.%6B%75%72%69%6C%6C%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-7144-2007", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=4jIiDP0AAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: 'Socials',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=6506154601", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ivan-kurilla-66328b5", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/ivan.kurilla.9", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
