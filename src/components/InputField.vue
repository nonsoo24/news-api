<template>
  <div>
    <input
      v-model="innerValue"
      :type="type"
      :id="id"
      :readonly="readonly"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
const inputTypes = ["text", "email", "password", "number"];
export default {
  name: "InputField",
  props: {
    id: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    readonly: {
      type: Boolean,
      required: false
    },
    value: {
      type: null,
      default: ""
    },
    type: {
      type: String,
      required: true,
      default: "text",
      validator: value => inputTypes.includes(value)
    }
  },
  data() {
    return {
      innerValue: ""
    };
  },
  computed: {
    hasValue() {
      return !!this.innerValue;
    }
  },
  watch: {
    innerValue(value) {
      this.$emit("input", value);
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val;
      }
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  }
};
</script>
