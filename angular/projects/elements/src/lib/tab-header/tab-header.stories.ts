import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTabHeaderDirective } from '../vscode-tab-header.directive';

const meta: Meta<VscodeTabHeaderDirective> = {
  title: 'Components/Tab Header',
  component: VscodeTabHeaderDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTabHeaderDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-tab-header>Tab Header</vscode-tab-header>',
  }),
};
