package com.mediyoga;

import com.facebook.react.ReactActivity;
import android.os.Bundle;
import com.facebook.react.ReactActivityDelegate; // <- add this necessary import
import com.zoontek.rnbootsplash.RNBootSplash; // <- add this necessary import
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "mediyoga";
  }
  @Override
protected void onCreate(Bundle savedInstanceState) {
  RNBootSplash.init(MainActivity.this);
  super.onCreate(null);
}
}
