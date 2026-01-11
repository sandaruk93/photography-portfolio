export interface CloudinaryImage {
    public_id: string;
    format: string;
    version: number;
    width: number;
    height: number;
    url: string;
    secure_url: string;
    display_name?: string;
    created_at: string;
    context?: {
        custom?: {
            caption?: string;
            title?: string;
            alt?: string;
        }
    };
}

export interface CloudinaryResponse {
    images: CloudinaryImage[];
    next_cursor?: string;
}
