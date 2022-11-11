import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://mcezydyvgtadriopxugd.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jZXp5ZHl2Z3RhZHJpb3B4dWdkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzg0NjAsImV4cCI6MTk4Mzc1NDQ2MH0.OMFQ1eP3jMqW2hFE6mw2L8Pylj64HfEC9OaMWy1zh6w";

const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export const VideoService = () => {
  return {
    getAllVideos() {
      return supabase.from("Videos").select("*");
    },
  };
};
