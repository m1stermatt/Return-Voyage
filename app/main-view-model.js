"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var MainWorldModel = /** @class */ (function (_super) {
    __extends(MainWorldModel, _super);
    function MainWorldModel() {
        var _this = _super.call(this) || this;
        _this.index = -1;
        _this.messages = ["hello", "how are you", "no u", "knock"];
        _this.set("message", "Hello world");
        return _this;
    }
    MainWorldModel.prototype.tapAction = function () {
        this.index++;
        if (this.index >= this.messages.length) {
            this.index = 0;
        }
        var label = this.get("message");
        this.set("message", label.text + this.messages[this.index]);
    };
    return MainWorldModel;
}(observable_1.Observable));
exports.default = MainWorldModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBRzdDO0lBQTZCLGtDQUFVO0lBS25DO1FBQUEsWUFDSSxpQkFBTyxTQUdWO1FBTkQsV0FBSyxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBSWYsS0FBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFELEtBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDOztJQUN2QyxDQUFDO0lBRUQsa0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNiLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRTtZQUNwQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNsQjtRQUNELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFDTCxxQkFBQztBQUFELENBQUMsQUFuQkQsQ0FBNkIsdUJBQVUsR0FtQnRDO0FBRUQsa0JBQWUsY0FBYyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ1aS9sYWJlbFwiO1xuXG5jbGFzcyBNYWluV29ybGRNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xuXG4gICAgbWVzc2FnZXM6IEFycmF5PHN0cmluZz47XG4gICAgaW5kZXg6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSBbXCJoZWxsb1wiLCBcImhvdyBhcmUgeW91XCIsIFwibm8gdVwiLCBcImtub2NrXCJdO1xuICAgICAgICB0aGlzLnNldChcIm1lc3NhZ2VcIiwgXCJIZWxsbyB3b3JsZFwiKTtcbiAgICB9XG5cbiAgICB0YXBBY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPj0gdGhpcy5tZXNzYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB9XG4gICAgICAgIHZhciBsYWJlbCA6IExhYmVsID0gdGhpcy5nZXQoXCJtZXNzYWdlXCIpO1xuICAgICAgICB0aGlzLnNldChcIm1lc3NhZ2VcIiwgbGFiZWwudGV4dCArIHRoaXMubWVzc2FnZXNbdGhpcy5pbmRleF0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFpbldvcmxkTW9kZWw7Il19