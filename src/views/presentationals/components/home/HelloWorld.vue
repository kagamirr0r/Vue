<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--<input type="text" :value="msg" @input="changeMsg" />-->
    <Form>
      <p>
        <Field
          name="field"
          as="input"
          :rules="isRequired"
          :value="msg"
          @input="changeMsg"
        />
      </p>
      <p style="color: red;"><ErrorMessage name="field" /></p>
    </Form>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import { Form, Field, ErrorMessage } from 'vee-validate';
  // import * as yup from 'yup';

  type Props = {
    msg: string;
  };

  export default defineComponent({
    components: {
      Form,
      Field,
      ErrorMessage,
    },
    props: {
      msg: {
        type: String,
        required: true,
        default: 'defalut msg',
      },
    },
    emits: ['rewrite'],
    setup(props: Props, context) {
      const changeMsg = (e: any) => {
        context.emit('rewrite', e);
      };

      const isRequired = (value: string | number): boolean | string => {
        return value ? true : 'This field is required';
      };
      return {
        changeMsg,
        isRequired,
      };
    },
  });
</script>
