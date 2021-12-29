import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(1);
    const increase = () => {
      count.value++;
    };

    return () => (
      <div>
        Home
        <button onClick={increase}>{count.value}</button>
      </div>
    );
  },
});
