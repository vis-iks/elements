import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTabPanelDirective } from '../vscode-tab-panel.directive';

const meta: Meta<VscodeTabPanelDirective> = {
  title: 'Components/Tab Panel',
  component: VscodeTabPanelDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTabPanelDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-tab-panel>Tab Panel</vscode-tab-panel>',
  }),
};
