import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeCheckboxDirective } from '../vscode-checkbox.directive';

const meta: Meta<VscodeCheckboxDirective> = {
  title: 'Components/Checkbox',
  component: VscodeCheckboxDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeCheckboxDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-checkbox>Checkbox</vscode-checkbox>',
  }),
};
