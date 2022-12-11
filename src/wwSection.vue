<template>
  <div class="sidebar-section">
    <div class="sidebar-section__main">
      <div class="sidebar-section__main--logo">
        <img width="35" height="35" src="https://www.computerhope.com/jargon/h/img.png" alt="">
      </div>
      <div v-for="(card, i) in content.cards" :key="i" @click="activeNewTab(i)" class="sidebar-section__main--icon" :class="{'sidebar-section__main--active': activeTab===i}">
        <img width="24" height="24" :src="card.icon" alt="">
      </div>
      <div class="sidebar-section__main--bottom">
        <div class="sidebar-section__main--icon">
          <img width="24" height="24" :src="content.setting.icon" alt="">
        </div>
      </div>
    </div>
    <div class="sidebar-section__sub">
      <div class="sidebar-section__sub--icon--bold">
        <p>{{content.cards[activeTab].title}}</p>
      </div>
      <div v-for="(subNav, i) in content.cards[activeTab].subNav" @click="subMenuClick(i)" :key="i" class="sidebar-section__sub--icon">
        <img width="24" height="24" :src="subNav.icon" alt="">
        <p>{{subNav.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

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
  },
  emits: ['update:content','trigger-event'],
  setup(){
    const activeTab = ref(0);
    const activeNewTab = (index) => {
      activeTab.value = index
      this.$emit('update:nav', { index });
    }
    const subMenuClick = (index) => {
      this.$emit('trigger-event', { menuIndex: activeTab.value, subMenuIndex: index });
    }
    return { activeTab, activeNewTab, subMenuClick }
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
  border: 1px solid #F3F4F7;
  width: 272px;
  text-align: center;
  .sidebar-section__main{
    position: relative;
    width: 72px;
    border-right: 1px solid #F3F4F7;
    .sidebar-section__main--logo{
      padding: 30px 0px 40px 0px;
    }
    .sidebar-section__main--bottom{
      position: absolute;
      bottom: 0;
      background: #fff;
      width: 100%;
    }
    .sidebar-section__main--icon{
      cursor: pointer;
      padding:20px 0;
      font-size: 14px;
      font-weight: 400;
      &.sidebar-section__main--active{
        border-left: 2px solid #6346BF;
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
        border-left: 1px solid #6346BF;
      }
      &.sidebar-section__sub--active{
        background: linear-gradient(90deg, #F8F5FE 0%, rgba(243, 235, 253, 0) 100%);
        border-left: 1px solid #6346BF;
      }
      img{
        margin-right: 10px;
      }
    }
  }
}
</style>