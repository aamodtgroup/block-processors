export const fileBlock = {
    name: 'fileBlock',
	test: ({ node }) => node.component === "div" && node.props.className === "wp-block-file",
	processor: ({ node }) => {
		node.children[0].props.target = "_blank";
		node.children[1].props.target = "_blank";
        return node;
	}
};