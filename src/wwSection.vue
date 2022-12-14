<template>
  <div class="sidebar-section" :style="cssVars"  :class="{ 'small-sidebar': content.smallSidebar }">
    <div class="sidebar-section__main">
      <div class="sidebar-section__main--logo">
        <img width="35" height="35" :src="content.brand.icon" alt="">
      </div>
      <div v-for="(card, i) in content.cards" :key="i" @click="activeNewTab(i)" class="sidebar-section__main--icon" :class="{'sidebar-section__main--active': activeTab===i}">
        <div class="sidebar-section__main--menu">
          <img width="24" height="24" :src="card.icon" alt="">
          <span v-if="content.toolTip" class="tool-tip">{{card.title}}</span>
        </div>
        <div class="sidebar-section__main--sub-menu" :class="{active: (activeTab===i && !content.smallSidebar)}">
          <div class="sidebar-section__sub--icon--bold">
            <p>{{card.title}}</p>
          </div>
          <div v-for="(subNav, i) in card.subNav" @click="subMenuClick(i)" :key="i" class="sidebar-section__sub--icon">
            <img width="24" height="24" :src="subNav.icon" alt="">
            <wwElement class="title__content" v-bind="content.title" :ww-props="{ text: subNav.title, readonly: true }" />
          </div>
        </div>
      </div>
      <div class="sidebar-section__main--bottom">
        <div v-for="(menu, i) in content.bottomMenu" :key="i" @click="bottomMenuClick(i)" class="sidebar-section__main--icon">
          <img width="24" height="24" :src="menu.icon" alt="">
          <span v-if="content.toolTip" class="tool-tip">{{menu.title}}</span>
        </div>
      </div>
    </div>
    <div class="sidebar-section__sub">

    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  props: {
    content: { type: Object, required: true },
  },
  computed: {
    textStyle() {
      return {
        color: this.content.textColor,
      };
    },
    cssVars() {
        return {
            '--activeBgColor': this.content.brand.activeColor,
            '--mainBgColor': this.content.brand.color,
            '--mainBorderColor': this.content.brand.borderColor,
        }
    }
  },
  emits: ['update:nav','trigger-event','update:bottomNav'],
  setup(){
    const activeTab = ref(0);
    const activeNewTab = (index) => {
      activeTab.value = index
      this.$emit('update:nav', { index });
    }

    const subMenuClick = (index) => {
      this.$emit('trigger-event', { menuIndex: activeTab.value, subMenuIndex: index });
    }
    const bottomMenuClick = (index) => {
      this.$emit('update:bottomNav', { index });
    }
    return { activeTab, activeNewTab, subMenuClick, bottomMenuClick }
  },
};
</script>

<style lang="scss" scoped>
.sidebar-section{
  position: fixed;
  bottom: 0;
  top:0;
  left:0;
  display: flex;
  flex-direction: row;
  background: var(--mainBgColor);
  border: 1px solid var(--mainBorderColor);
  width: 272px;
  text-align: center;
  .sidebar-section__main{
    position: relative;
    width: 72px;
    border-right: 1px solid var(--mainBorderColor);
    .sidebar-section__main--logo{
      padding: 30px 0px 40px 0px;
    }
    .sidebar-section__main--bottom{
      position: absolute;
      bottom: 0;
      background: var(--mainBgColor);
      width: 100%;
      .sidebar-section__main--icon{
        position: relative;
        > span{
          position: absolute;
          padding: 5px 10px;
          font-size:12px;
          background: black;
          color: white;
          border-radius: 4px;
          left: 100%;
          display: none;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          white-space: nowrap;
          top: 50%;
          &::after{
            content: "";
            border: 5px solid;
            border-color: transparent black transparent transparent;
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);;
            -webkit-transform: translateY(-50%);;
          }
        }
        &:hover > span{
          display: block;
        }
      }
    }
    .sidebar-section__main--icon{
      cursor: pointer;
      padding:20px 0;
      font-size: 14px;
      font-weight: 400;
      position: static;
      .sidebar-section__main--menu{
        position: relative;
        z-index: 9;
        > img{
          filter: brightness(0);
        }
        > span{
          position: absolute;
          padding: 5px 10px;
          font-size:12px;
          background: black;
          color: white;
          border-radius: 4px;
          left: 100%;
          display: none;
          transform: translateY(-50%);
          -webkit-transform: translateY(-50%);
          white-space: nowrap;
          top: 50%;
          &::after{
            content: "";
            border: 5px solid;
            border-color: transparent black transparent transparent;
            position: absolute;
            left: -10px;
            top: 50%;
            transform: translateY(-50%);;
            -webkit-transform: translateY(-50%);;
          }
        }
        &:hover > span{
          display: block;
        }
      }
      &.sidebar-section__main--active{
        border-left: 2px solid  var(--activeBgColor);
        img{
          filter: brightness(1);
        }
      }
      .sidebar-section__main--sub-menu{
        left: 100%;
        position: absolute;
        top: 109px;
        width: 200px;
        padding: 0;
        bottom: 0;
        overflow-y: auto;
        display: none;
        &.active{
          display: block;
        }
        .sidebar-section__sub--icon--bold{
          text-align: left;
          padding: 14px;
          font-size: 16px;
          font-weight: bold;
        }
        .sidebar-section__sub--icon{
          display: flex;
          display: -webkit-flex;
          align-items: center;
          -webkit-align-items: center;
          padding: 14px;
          border-left: 2px solid transparent;
          img{
            margin-right: 10px;
          }
          &.active, &:hover{
            background: #f3f4ff;
            border-left: 2px solid #338bf0;
          }
        }
      }
      
    }
  }
  .sidebar-section__sub{
    margin-top: 110px;
    text-align: left;
    .sidebar-section__sub--icon--bold{
      font-weight: 500;
      padding: 22px 10px;
    }
    .sidebar-section__sub--icon{
      display: flex;
      align-items: center;
      padding: 20px 10px;
      width: 200px;
      cursor: pointer;
      &:hover{
        background: linear-gradient(90deg, #F8F5FE 0%, rgba(243, 235, 253, 0) 100%);
        border-left: 1px solid  var(--activeBgColor);;
      }
      &.sidebar-section__sub--active{
        background: linear-gradient(90deg, #F8F5FE 0%, rgba(243, 235, 253, 0) 100%);
        border-left: 1px solid  var(--activeBgColor);;
      }
      img{
        margin-right: 10px;
      }
    }
  }
  &.small-sidebar{
    width: 72px;
    .tool-tip{
      display: none !important;
    }
    .sidebar-section__main--icon {
      .sidebar-section__main--sub-menu{
        display: none;
      }
      &:hover .sidebar-section__main--sub-menu {
        display: block;
      }
    }
  }
}
</style>