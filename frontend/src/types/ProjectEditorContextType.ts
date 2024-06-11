export interface ProjectEditorContextType {
    config: {
        projectName: string;
        backgroundColor: string;
        titleColor: string;
        textColor: string;
        placeholderColor: string;
        inputBorderColor: string;
        inputBorderWidth: string;
        inputBorderRadius: string;
        heroFont: string;
        heroFontWeight: string;
        heroText: string;
        subFont: string;
        subFontWeight: string;
        subText: string;
        placeholderText: string;
        buttonColor: string;
        buttonBorderColor: string;
        buttonTextColor: string;
        buttonBorderWidth: string;
        buttonBorderRadius: string;
        buttonFont: string;
        buttonFontWeight: string;
        buttonText: string;
        successMessage: string;
        logo: string;
        showLogo: boolean;
    };
    save: (key: string, value: any) => void
}
