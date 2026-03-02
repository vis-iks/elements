import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeSplitLayoutDirective } from '../vscode-split-layout.directive';

const meta: Meta<VscodeSplitLayoutDirective> = {
  title: 'Components/Split Layout',
  component: VscodeSplitLayoutDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeSplitLayoutDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-split-layout>Split Layout</vscode-split-layout>',
  }),
};
