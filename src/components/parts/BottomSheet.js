import React from "react";
import { connect } from "react-redux";
import BottomSheet from "reanimated-bottom-sheet";
import { BackHandler, Dimensions,Platform,KeyboardAvoidingView } from "react-native";
import { Box } from "..";

const { height } = Dimensions.get("window");
function BottomSheetArea({
  sheetRef,
  renderContent,
  snapPoints,
  onCloseEnd,
  header,
  headerStyle,
  defaultHeaderActive = true,
}) {
  BackHandler.addEventListener("hardwareBackPress", onCloseEnd);
  const renderHeader = () =>
    defaultHeaderActive && (
      <Box
        style={{
          backgroundColor: "white",
          shadowColor: "#000000",
          paddingTop: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          ...headerStyle,
        }}
      >
        <Box
          style={{
            alignItems: "center",
          }}
        >
          <Box
            style={{
              width: 40,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#295BE0",
              marginBottom: 10,
            }}
          />
        </Box>
      </Box>
    );

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
  >
    <Box height={height}>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={snapPoints}
        borderRadius={30}
        renderContent={renderContent}
        renderHeader={header || renderHeader}
        enabledInnerScrolling={false}
        enabledHeaderGestureInteraction
        enabledContentGestureInteraction={false}
        enabledContentTapInteraction={false}
        onCloseEnd={onCloseEnd}
      />
    </Box>
    </KeyboardAvoidingView>
  );
}

const mapStateToProps = () => ({});
export default connect(mapStateToProps, {})(BottomSheetArea);
