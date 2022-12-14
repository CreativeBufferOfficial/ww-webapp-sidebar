export default {
  editor: {
    label: {
      en: "ww-weweb-seminar",
    },
  },
  properties: {
    textColor: {
      label: {
        en: "Text color",
      },
      type: "Color",
      defaultValue: "#F23636",
    },
    title: {
      defaultValue: { isWwObject: true, type: 'ww-text' },
    },
    toolTip: {
      defaultValue: true
    },
    defautActiveTabIndex: {
      defaultValue: 1
    },
    brand: {
      hidden: true,
      defaultValue: {
        icon: 'https://www.computerhope.com/jargon/h/img.png',
        color: '#FFFFFF',
        borderColor: '#F3F4F7',
        activeColor: '#6346BF' 
      }
    },
    smallSidebar: {
      defaultValue: true,
      hidden: true,
    },
    cards: {
      defaultValue: [
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String 1', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'Sub String',
            },
            { 
              urlPrefix: 'String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'Sub String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String 2', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'Sub String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String 3',
          title: 'String 3', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'Sub String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            },
            { 
              urlPrefix: 'Sub String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            },
            { 
              urlPrefix: 'Sub String',
              icon: 'https://www.computerhope.com/jargon/h/img.png',
              title: 'String',
            },
          ],
          showSubNav: 'Boolean', 
        }
      ]
    },
    bottomMenu: {
      defaultValue: [
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String 1', 
        },
        {
          icon: 'https://www.computerhope.com/jargon/h/img.png',
          urlPrefix: 'String',
          title: 'String 2',
        },
      ]
    },
  },
};
