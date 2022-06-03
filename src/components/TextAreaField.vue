<template>
  <div>
    <textarea
      v-model="innerValue"
      :id="id"
      :rows="rows"
      :cols="cols"
      :readonly="readonly"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "TextAreaField",
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
    rows: {
      type: String,
      required: true,
      default: "4"
    },
    cols: {
      type: String,
      required: false,
      default: "50"
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
