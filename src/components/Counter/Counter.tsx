import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Counter',
  setup() {
    const count = ref(1);
    return () => (
      <div>
        <h2>Counter</h2>
        <a-button type="primary" onClick={() => count.value++}>
          {count.value}
        </a-button>
      </div>
    );
  },
});
