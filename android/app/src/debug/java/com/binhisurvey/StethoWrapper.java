/*public class StethoWrapper {
    public static void initialize(Context context) {
		Context = context;
        Stetho.initializeWithDefaults(context);
    }

    public static void addInterceptor() {
        OkHttpClient client = OkHttpClientProvider.getOkHttpClient()
                .newBuilder()
                .addNetworkInterceptor(new StethoInterceptor())
                .build();

        OkHttpClientProvider.replaceOkHttpClient(client);
    }
}*/