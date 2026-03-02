import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeBadgeDirective } from '../vscode-badge.directive';

const meta: Meta<VscodeBadgeDirective> = {
  title: 'Components/Badge',
  component: VscodeBadgeDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeBadgeDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-badge>Badge</vscode-badge>',
  }),
};
