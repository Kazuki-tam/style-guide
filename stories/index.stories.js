/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';

import HelloWorld from '../src/components/HelloWorld.vue'
import Button from '../src/components/Button.vue'
import TextArea from '../src/components/TextArea.vue'


storiesOf('HelloWorld', module).add('top title', () => ({
  components: { HelloWorld },
  template: '<HelloWorld msg="Let\'s create style guide with Storybook"/>',
}));

storiesOf('Form', module).add('Text Area', () => ({
  components: { TextArea },
  template: '<TextArea/>',
}));

storiesOf('Button', module)
  .add('Click button', () => ({
    components: { Button },
    template: '<Button @click="action">クリック</Button>',
    methods: { action: action('clicked') }
  }));
  

/* eslint-enable react/react-in-jsx-scope */
