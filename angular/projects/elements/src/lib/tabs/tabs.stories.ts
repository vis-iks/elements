import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTabsDirective } from '../vscode-tabs.directive';

const meta: Meta<VscodeTabsDirective> = {
  title: 'Components/Tabs',
  component: VscodeTabsDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTabsDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-tabs>Tabs</vscode-tabs>',
  }),
};
