import React from 'react';
import data from '../constants/sampleMovieData';
import DataTable from '../../src/index';

const columns = [
	{
		name: 'Title',
		selector: row => row.title,
	},
	{
		name: 'Director',
		selector: row => row.director,
	},
	{
		name: 'Year',
		selector: row => row.year,
	},
];

const FixedHeaderStory = () => (
	<DataTable
		title="Movie List"
		columns={columns}
		data={data}
		RowWrapper={({ children }) => <div style={{ height: '100px' }}>{children}</div>}
	/>
);

const Template = args => <FixedHeaderStory {...args} />;

export const RowWrapper = Template.bind({});

RowWrapper.args = {
	fixedHeader: true,
	fixedHeaderScrollHeight: '300px',
};

export default {
	title: 'Wrapper/Row Wrapper',
	component: RowWrapper,
};
