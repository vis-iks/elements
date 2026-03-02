import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeSingleSelectDirective } from '../vscode-single-select.directive';

const meta: Meta<VscodeSingleSelectDirective> = {
  title: 'Components/Single Select',
  component: VscodeSingleSelectDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeSingleSelectDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-single-select>Single Select</vscode-single-select>',
  }),
};
