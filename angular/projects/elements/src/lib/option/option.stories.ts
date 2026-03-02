import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeOptionDirective } from '../vscode-option.directive';

const meta: Meta<VscodeOptionDirective> = {
  title: 'Components/Option',
  component: VscodeOptionDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeOptionDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-option>Option</vscode-option>',
  }),
};
