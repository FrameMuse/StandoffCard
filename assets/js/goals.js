class goals {
    constructor(name) {
        this.name = name;
        this.default();

        this.progress_block = '<div class="goal__line"><div class="goal__line--line-progress"></div><div class="goal__counter"><span class="goal__counter--icon"></span><span class="goal__counter--amount"></span></div></div>';

        this.commit_progress(2, 89);
    }

    default() {
        this.goals_number = $(".goal").length;
        this.width = $(this.name).outerWidth();
        this.goal_width = $(".goal").outerWidth();
        this.goal_height = $(".goal__image").outerHeight();
        this.goal_image = $(".goal__image").outerWidth();
        this.goal_image_indent = 35;
        this.goal_goal_height = $(".goal__goal").outerHeight();
    }

    create_progress_block() {
        if (this.goals_number <= 1) {
            console.error("Too few elements at the page (" + this.goals_number + ")");
            return;
        }
        $(this.name).append(this.progress_block);
    }

    create_goal(goal__goal, goal__level, goal__image, goal__rewards, goal__reached = "") {
        if (goal__reached) var goal__reached = "goal__reached";
        var goal_sample = '<div class="goal ' + goal__reached + '" data-goal-id="' + this.goals_number + '"><div class="goal__goal">' + goal__goal + '</div><div class="goal__image"><img class="goal__image--image" src="' + goal__image + '"></div><div class="goal__level">' + goal__level + '</div><div class="goal__rewards">' + goal__rewards + '</div>';
        this.goals_number++;
        return goal_sample;
    }

    add_goal(options) {
        var html = this.create_goal(options["goal"], options["level"], options["image"], options["rewards"], options["reached"]);
        $(this.name).append(html);
    }

    get_progress(goal_number, percent) {
        var goals_number = $(".goal").length;
        var goals_in_width = this.goal_width * goals_number;
        var empty_space = this.width - goals_in_width;
        var goal_indent = empty_space / (goals_number - 1);
        var step = this.goal_width + goal_indent;
        var indent = step * goal_number;
        var percent = percent / 100;
        var progress = (indent - step) + (this.goal_width / 2) + ((step * percent)) - step;
        return progress;
    }

    commit_progress(goal_number, percent) {
        var progress = this.get_progress(goal_number, percent);
        if (progress > this.width) {
            console.log(progress);
            console.error("Commited line is too big for '" + this.name + "'");
            return progress + "px";
        }
        if (progress < 0) progress = 0;
        if (this.goals_number <= 1) {
            console.error("Too few elements at the page (" + this.goals_number + ")");
            return;
        }
        if ((percent >= 98 && percent <= 100) || (percent >= 0 && percent <= 2)) {
            $(".goals__counter--icon").addClass("hidden");
        } else {
            $(".goals__counter--icon").removeClass("hidden");
        }
        $(".goals__progress--line").css("width", progress + "px");
        $(".goals__counter").css("left", progress - ($(".goals__counter").outerWidth() / 2) + "px");
        $(".goals__line").css("top", this.goal_image_indent + this.goal_goal_height + (this.goal_height / 2) + "px");
    }
}

const progress = new goals(".goals__inner");