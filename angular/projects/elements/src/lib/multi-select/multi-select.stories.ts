import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeMultiSelectDirective } from '../vscode-multi-select.directive';

const meta: Meta<VscodeMultiSelectDirective> = {
  title: 'Components/Multi Select',
  component: VscodeMultiSelectDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeMultiSelectDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-multi-select>Multi Select</vscode-multi-select>',
  }),
};
