package io.ionic.starter;

import android.app.Application;
import com.clevertap.android.sdk.ActivityLifecycleCallback;
import com.clevertap.android.sdk.CleverTapAPI;

public class MainApplication extends Application {

  @Override
  public void onCreate() {
    ActivityLifecycleCallback.register(this);
    super.onCreate();
    CleverTapAPI.setDebugLevel(CleverTapAPI.LogLevel.VERBOSE);
  }

}
