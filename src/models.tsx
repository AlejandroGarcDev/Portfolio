export interface CodeAreaModel {
    content: string;
    language: string;
}

export interface ProjectModel {
    title: string,
    img_url: string,
    date?: string,       /* Date format: DD/MM/YY */
    category: string[],
    languages: string[],
    description: string,
    quotes?: string[],
    engine?: string,
    github_url?: string,
    doc_url?: string,
    project_url?: string,
    youtube_url?: string,
    youtube_url2?: string,
}

export interface TagModel{
    title: string,
    content: string
}

export interface CareerElementModel{
    title: string,
    start_date?: string,
    end_date: string,
    location: string,
    role?: string,
    description: string
}

export interface SkillModel{
    language_name: string,
    icon_url: string
}
export interface SkillGroupModel{
    title: string,
    skills: SkillModel[]
}