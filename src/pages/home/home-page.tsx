import '@/common/env';

import { defineComponent, ref } from 'vue';

import Counter from '@/components/Counter/Counter';

export default defineComponent({
  setup() {
    const count = ref(1);
    const increase = () => {
      count.value++;
    };

    return () => (
      <div>
        <Counter />
      </div>
    );
  },
});
