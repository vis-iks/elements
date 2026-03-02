import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeRadioGroupDirective } from '../vscode-radio-group.directive';

const meta: Meta<VscodeRadioGroupDirective> = {
  title: 'Components/Radio Group',
  component: VscodeRadioGroupDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeRadioGroupDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-radio-group>Radio Group</vscode-radio-group>',
  }),
};
