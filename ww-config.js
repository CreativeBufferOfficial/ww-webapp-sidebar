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
      hidden: true,
      defaultValue: { isWwObject: true, type: 'ww-text' },
    },
    toolTip: {
      label: {en: 'Tooltip', fr: 'Tooltip'},
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      bindingValidation: {
          type: 'boolean',
          tooltip: 'A boolean that defines if the input is required: `true | false`',
      },
      defaultValue: true
    },
    defautActiveTabIndex: {
      defaultValue: 1
    },
    brand: {
      label: { en: 'Brand Customize', fr: 'Brand Customize' },
      type: 'Object',
      section: 'settings',
      options: {
        item: {
          icon: {
            label: { en: 'Icon' },
            type: 'Text',
            options: { placeholder: 'Icon' },
          },
          color: {
            label: { en: 'Color' },
            type: 'Color',
            options: { placeholder: 'Color' },
          },
          borderColor: {
            label: { en: 'Border Color' },
            type: 'Color',
            options: { placeholder: 'Border Color' },
          },
          activeColor: {
            label: { en: 'Active Color' },
            type: 'Color',
            options: { placeholder: 'Active Color' },
          },
        }
      },
      defaultValue: {
        icon: 'https://www.computerhope.com/jargon/h/img.png',
        color: '#FFFFFF',
        borderColor: '#F3F4F7',
        activeColor: '#6346BF' 
      },
    },
    smallSidebar: {
      label: {en: 'Small Sidebar', fr: 'Small Sidebar'},
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      bindingValidation: {
          type: 'boolean',
          tooltip: 'A boolean that defines if the input is required: `true | false`',
      },
      defaultValue: false,
    },
    cards: {
      label: { en: 'Top menus', fr: 'Top menus' },
      type: 'Array',
      section: 'settings',
      options: { 
        item: {
            type: 'Object',
            options: {
                item: {
                    icon: {
                        label: { en: 'Icon' },
                        type: 'Icon',
                        options: { placeholder: 'Icon' },
                    },
                    urlPrefix: {
                        label: { en: 'Url' },
                        type: 'Text',
                        options: { placeholder: 'Url' },
                    },
                    title: {
                        label: { en: 'Title' },
                        type: 'Text',
                        options: { placeholder: 'Title' },
                    },
                    subNav: {
                      label: { en: 'Subnav' },
                      type: 'Array',
                      options: { 
                        item: {
                          type: 'Object',
                          options: {
                            item: {
                              icon: {
                                label: { en: 'Icon' },
                                type: 'Text',
                                options: { placeholder: 'Icon' },
                              },
                              title: {
                                label: { en: 'Title' },
                                type: 'Text',
                                options: { placeholder: 'Title' },
                              }
                            }
                          }
                        }
                      },
                    }
                },
            },
        },
    },
      defaultValue: [
        {
          icon: 'wwi wwi-icon',
          urlPrefix: 'String',
          title: 'String 1', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'String',
              icon: 'wwi wwi-icon',
              title: 'Sub String',
            },
            { 
              urlPrefix: 'String',
              icon: 'wwi wwi-icon',
              title: 'Sub String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'wwi wwi-icon',
          urlPrefix: 'String',
          title: 'String 2', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'Sub String',
              icon: 'wwi wwi-icon',
              title: 'String',
            }
          ],
          showSubNav: 'Boolean', 
        },
        {
          icon: 'wwi wwi-icon',
          urlPrefix: 'String 3',
          title: 'String 3', // shows as tooltip on hover
          subNav: [
            { 
              urlPrefix: 'Sub String',
              icon: 'wwi wwi-icon',
              title: 'String',
            },
            { 
              urlPrefix: 'Sub String',
              icon: 'wwi wwi-icon',
              title: 'String',
            },
            { 
              urlPrefix: 'Sub String',
              icon: 'wwi wwi-icon',
              title: 'String',
            },
          ],
          showSubNav: 'Boolean', 
        }
      ],
      bindable: true,
      /* wwEditor:start */
      bindingValidation: {
          type: 'array',
          tooltip:
              'A collection of data in array of object format: \n\n `[{}, {}, ...]',
      },
    },
    bottomMenu: {
      label: { en: 'Bottom menus', fr: 'Bottom menus' },
      type: 'Array',
      section: 'settings',
      options: {
        item: {
            type: 'Object',
            options: {
                item: {
                    icon: {
                        label: { en: 'Icon' },
                        type: 'Icon',
                        options: { placeholder: 'Icon' },
                    },
                    urlPrefix: {
                        label: { en: 'Url' },
                        type: 'Text',
                        options: { placeholder: 'Url' },
                    },
                    title: {
                        label: { en: 'Title' },
                        type: 'Text',
                        options: { placeholder: 'Title' },
                    },
                  },
                },
              },
      },
      defaultValue: [
        {
          icon: 'wwi wwi-icon',
          urlPrefix: 'String',
          title: 'String 1', 
        },
        {
          icon: 'wwi wwi-icon',
          urlPrefix: 'String',
          title: 'String 2',
        },
      ],
      bindable: true,
      bindingValidation: {
        type: 'array',
        tooltip:
            'A collection of data in array of object format: \n\n `[{}, {}, ...]',
      },
    },
  },
};
