export const USkeleton = {
    name: 'u-skeleton',
    props: {
        title: { type: Boolean, default: true },
        paragraph: { type: [Boolean, Number], default: true },
    },
    computed: {
        currentParagraph() {
            if (this.paragraph === true)
                return 3;
            else if (this.paragraph === false)
                return 0;
            else
                return this.paragraph;
        },
    },
};

export default USkeleton;
