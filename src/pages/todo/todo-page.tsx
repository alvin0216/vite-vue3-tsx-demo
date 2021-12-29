import { defineComponent, reactive, ref } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({
      list: [] as string[],
      inputValue: '',
    });

    return () => (
      <div>
        Home
        <input v-model={state.inputValue} />
        <button
          onClick={() => {
            state.list.push(state.inputValue);
          }}
        >
          确定
        </button>
        <ul>
          {state.list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  },
});
