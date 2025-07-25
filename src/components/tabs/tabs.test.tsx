import React from 'react';
import { render, screen, waitFor, within } from '@testing-library/react';
import TabsWithContent from './examples/tabs-example-a';
import TabsWithBorder from './examples/tabs-example-b';
import TabsWithDisabledAndColors from './examples/tabs-example-d';
import TabsWithThemeTabsContainerAndSize from './examples/tabs-example-c';

describe('Tabs', () => {
    test('renders with content', () => {
        render(<TabsWithContent />);
        expect(screen.getByText('Tab 1 title')).toBeInTheDocument();
        expect(screen.getByText('Tab 2 title')).toBeInTheDocument();
        expect(screen.getByText('Tab 4 title')).toBeInTheDocument();
    });

    test('activates tab when clicked', async () => {
        render(<TabsWithContent />);
        const tab1 = screen.getByTestId('button-tab-one');
        expect(tab1).toBeInTheDocument();
        expect(within(tab1).queryByTestId('tab-border')).not.toBeInTheDocument();

        tab1.focus();
        tab1.click();

        await waitFor(() => {
            expect(screen.getByText('Tab 1 content')).toBeInTheDocument();
        })

        const tab3 = screen.getByTestId('button-tab-three');
        tab3.focus();
        tab3.click();

        await waitFor(() => {
            expect(within(tab1).queryByTestId('tab-border')).not.toBeInTheDocument();
        })
        expect(screen.getByText('Tab 3 content')).toBeInTheDocument();
        expect(screen.queryByText('Tab 1 content')).not.toBeInTheDocument();
    });

    test('renders with disabled', () => {
        render(<TabsWithDisabledAndColors />);
        expect(screen.getByText('Clouds')).toBeInTheDocument();
        expect(screen.getByText('Clouds content')).toBeInTheDocument();
        expect(screen.getByText('Animals')).toBeInTheDocument();
    });

    test('pressing on disabled tab does not work', async () => {
        render(<TabsWithDisabledAndColors />);
        const tab1 = screen.getByTestId('button-tab-Animals');

        tab1.focus();
        tab1.click()

        await waitFor(() => {
            expect(screen.queryByText('Animals content')).not.toBeInTheDocument()
        })

        const tab2 = screen.getByTestId('button-tab-Robots');
        tab2.focus();
        tab2.click();

        await waitFor(() => {
            expect(screen.getByText('Robots content')).toBeInTheDocument()
        })
    });

    test('adds themeTabContainer class', () => {
        render(<TabsWithThemeTabsContainerAndSize />);
        expect(screen.getByTestId('tabs-wrapper')).toHaveClass('border-b border--gray-light w300 flex flex--end-main');
    });

    test('adds color classes', () => {
        render(<TabsWithDisabledAndColors />);
        expect(within(screen.getByTestId('button-tab-Robots')).getByText('Robots')).toHaveClass('color-purple color-purple-dark-on-hover');
        expect(within(screen.getByTestId('button-tab-Clouds')).getByText('Clouds')).toHaveClass('color-pink-on-active is-active');
        expect(within(screen.getByTestId('button-tab-Animals')).getByText('Animals')).toHaveClass('color-gray-light');
    });

    test('render border', () => {
        render(<TabsWithBorder />);
        expect(screen.getByTestId('tabs-wrapper')).toHaveClass('border-b border--gray-light mb-neg1');
        expect(screen.getByText('Breakfast')).toHaveClass('border-b is-active');
    })
});



