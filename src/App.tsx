import { defineComponent } from 'vue';

export default defineComponent({
  setup(props) {
    return () => (
      <div>
        App
        <router-view></router-view>
      </div>
    );
  },
});
